import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact or visit us:</h2>
      <div className="contact-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11906.633850660224!2d44.83680123639229!3d41.74945912657022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d358e5032f5%3A0x1057a840988d1984!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY4YOhIOGDrOGDp-GDkOGDmuGDoeGDkOGDquGDkOGDleGDmA!5e0!3m2!1ska!2sge!4v1671117064757!5m2!1ska!2sge"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-info">
          <p>Mob-Number:</p>
          <p>+995 599 999 999</p>
        </div>
      </div>
    </div>
  );
}
