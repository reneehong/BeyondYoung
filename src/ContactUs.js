import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactUs.css";

function ContactUs() {
    useEffect(() => {
        const existingMap = L.DomUtil.get("map");
        if (existingMap != null) {
            existingMap._leaflet_id = null;
        }

        const map = L.map("map").setView([40.723299357700576, -74.30861013255446], 19);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 22,
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);
        const customIcon = L.icon({
            iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
        L.marker([40.723299357700576, -74.30861013255446], { icon: customIcon })
            .addTo(map)
            .bindPopup("374 Millburn Ave");
    }, []);

    return (
        <div className="contact-page">
            <h1 className="contact-header">We’d Love to Hear from You –<br />Connect with Us Today!</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> beyondyoungnj@gmail.com</p>
                <p><strong>Phone Number:</strong> 917-886-6970</p>
                <p><strong>Address:</strong> 374 Millburn Avenue, Millburn, 07078</p>
                <p><strong>Follow us on:</strong>
                    <span className="icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </span>
                </p>
            </div>
            <div id="map" className="contact-map"></div>



        </div>
    );
}

export default ContactUs;
