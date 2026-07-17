import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 修复 Leaflet 默认图标在 Vite 中丢失
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl });

interface MapViewProps {
  lat: number;
  lng: number;
  zoom?: number;
  name?: string;
  address?: string;
  className?: string;
}

export default function MapView({
  lat,
  lng,
  zoom = 15,
  name = "",
  address = "",
  className = "",
}: MapViewProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ height: "100%", width: "100%" }}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <div className="text-sm">
            <p className="font-semibold">{name || "公司位置"}</p>
            {address && <p className="text-gray-500 text-xs mt-0.5">{address}</p>}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
