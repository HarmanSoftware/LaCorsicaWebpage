import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function ReactMap() {
  const position = [36.2366531174912, 43.996473671164644]

  return (
    <div className='h-72 w-84 !-z-50'>
<MapContainer center={position} zoom={14} scrollWheelZoom={false}  style={{height:'100%', width:'100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        1 Vision Agency
      </Popup>
    </Marker>
  </MapContainer>
      </div>
  )
}
