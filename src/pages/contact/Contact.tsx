import React, { useState } from "react";
import "./contact.scss";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Thank you! We'll get back to you soon 🐾");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="subtitle">
        Got questions or need help? Reach out and we’ll wag our way back to you!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p>
            <strong>Email:</strong> support@petstore.com
          </p>
          <p>
            <strong>Phone:</strong> +972 54-123-4567
          </p>
          <p>
            <strong>Location:</strong> Tel Aviv, Israel
          </p>

          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="contact-map">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.370266402535!2d34.7805273151682!3d32.085299526587154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c8ebbe148ed%3A0x19bd1e1b6d8d8d8!2sTel%20Aviv!5e0!3m2!1sen!2sil!4v1683873748205!5m2!1sen!2sil"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px", marginTop: "2rem" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
