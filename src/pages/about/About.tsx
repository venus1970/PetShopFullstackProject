import React from "react";
import "./about.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Pet Store</h1>
        <p>Where love for animals meets quality care and products.</p>
      </div>

      <div className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          At Pet Store, we believe pets are family. Our mission is to provide
          high-quality pet products and services that support pet health,
          happiness, and a lifelong bond between pets and their humans.
        </p>
      </div>

      <div className="about-section values">
        <h2>What We Value</h2>
        <ul>
          <li>❤️ Compassionate Care</li>
          <li>🔍 Expert Knowledge</li>
          <li>🌱 Sustainable Practices</li>
          <li>🎉 Joyful Experiences</li>
        </ul>
      </div>

      <div className="about-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/images/happy pet1.png" alt="Happy Pet 1" />
          </div>
          <div>
            <img src="/images/happy pet2.jpg" alt="Happy Pet 2" />
          </div>
          <div>
            <img src="/images/customer and pet.jpg" alt="Customer and Pet" />
          </div>
          <div>
            <img src="/images/playfull puppy.jpg" alt="Playful Puppy" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
