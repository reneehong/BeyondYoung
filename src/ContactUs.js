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
            <div id="map" className="contact-map"></div>
            <div className="contact-content">
                <h1 className="contact-header">We’d Love to Hear from You –<br />Connect with Us Today!</h1>
                <div className="contact-info">
                    <div className="contact-links">
                        <p><strong>Send us a message:</strong>
                            <a href="https://forms.gle/7Cxju9GUh3p6XvEo8"> https://forms.gle/7Cxju9GUh3p6XvEo8</a></p>

                        <p>
                            <strong>Email:</strong>
                            <a href="mailto:beyondyoungnj@gmail.com"> beyondyoungnj@gmail.com</a>
                        </p>

                        <p>
                            <strong>Phone Number:</strong>
                            <a href="tel:9178866970"> 917-886-6970</a>
                        </p>

                        <p>
                            <strong>Address:</strong>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=374+Millburn+Avenue,+Millburn,+NJ+07078"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                374 Millburn Avenue, Millburn, 07078
                            </a>
                        </p>
                    </div>

                    <div className="contact-social">
                        <p><strong>Follow us on:</strong></p>
                        <div className="icons">
                            <a href="https://www.instagram.com/beyondyoungnj/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/beyond-young-nj/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default ContactUs;
