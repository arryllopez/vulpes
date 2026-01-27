"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Circle, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationPickerProps {
  onLocationSelect: (lat: number, lng: number, radius: number) => void;
  radius?: number;
}

function MapClickHandler({
  onLocationSelect,
  setPosition,
}: {
  onLocationSelect: (lat: number, lng: number) => void;
  setPosition: (pos: [number, number] | null) => void;
}) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onLocationSelect(lat, lng);
    },
  });
  return null;
}

export function LocationPicker({ onLocationSelect, radius = 5000 }: LocationPickerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [currentRadius, setCurrentRadius] = useState(radius);

  const handleLocationSelect = (lat: number, lng: number) => {
    onLocationSelect(lat, lng, currentRadius);
  };

  const handleRadiusChange = (newRadius: number) => {
    setCurrentRadius(newRadius);
    if (position) {
      onLocationSelect(position[0], position[1], newRadius);
    }
  };

  return (
    <div className="space-y-3">
      <div className="w-full h-[300px] rounded-xl overflow-hidden border border-[#ccdbfd]/50">
        <MapContainer
          center={[43.6532, -79.3832]} // Default to Toronto
          zoom={2}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler
            onLocationSelect={handleLocationSelect}
            setPosition={setPosition}
          />
          {position && (
            <>
              <Marker position={position} icon={defaultIcon} />
              <Circle
                center={position}
                radius={currentRadius}
                pathOptions={{
                  color: "#6366f1",
                  fillColor: "#6366f1",
                  fillOpacity: 0.15,
                }}
              />
            </>
          )}
        </MapContainer>
      </div>

      {position && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 font-(family-name:--font-caudex)">Radius: {(currentRadius / 1000).toFixed(1)} km</span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={currentRadius}
            onChange={(e) => handleRadiusChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <p className="text-xs text-gray-500 text-center font-(family-name:--font-caudex)">
            Selected: {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </p>
        </div>
      )}

      {!position && (
        <p className="text-xs text-gray-500 text-center">
          Click on the map to select your location
        </p>
      )}
    </div>
  );
}

export default LocationPicker;
