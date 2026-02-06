import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactMap = () => {
    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-3xl">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>Our Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default ContactMap;