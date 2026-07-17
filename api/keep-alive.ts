import { supabase } from "../src/lib/supabase";

export default async function handler() {
  try {
    const { data, error } = await supabase.rpc('get_now');
    
    // 如果 RPC 不可用，用简单查询替代
    if (error) {
      const { error: rawError } = await supabase.from('contact_messages').select('id', { count: 'exact', head: true });
      if (rawError) {
        console.error('Keep-alive failed:', rawError.message);
        return new Response(JSON.stringify({ status: 'error', message: rawError.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    console.log('Keep-alive ping success at', new Date().toISOString());
    return new Response(JSON.stringify({ status: 'ok', time: new Date().toISOString() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Keep-alive error:', err);
    return new Response(JSON.stringify({ status: 'error', message: err?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
