import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔹 added for navigation
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import model4 from "../assets/model4.png";
import model5 from "../assets/model5.png";
import Navbar from "./Navbar";
import "./HeroSection.css";

const models = [
  { img: model1, bg: "#A86D5D", height: "360px", heroBg: "#f3e8e5" },
  { img: model2, bg: "#6D8D99", height: "360px", heroBg: "#e3ecf1" },
  { img: model3, bg: "#E4DFD7", height: "360px", heroBg: "#f0ece7" },
  { img: model4, bg: "#D2D3DB", height: "360px", heroBg: "#e8e9f0" },
  { img: model5, bg: "#B5978B", height: "360px", heroBg: "#f3e6df" },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate(); // 🔹 initialize navigation

  const activeHeroBg =
    hoverIndex !== null
      ? models[hoverIndex].heroBg
      : models[activeIndex].heroBg;

  return (
    <section
      className="hero-section text-center"
      style={{
        backgroundColor: activeHeroBg,
        transition: "background-color 0.5s ease",
      }}
    >
      <Navbar />
      <p className="text-uppercase text-secondary small">
        New spring collection 
      </p>
      <h1 className="fw-bold display-5 mb-3">
        Turn Your Imagination <br />
        Into Wearable Art At Vibeprint
      </h1>
      <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
        Unveiling a fashion destination where trends blend seamlessly with your
        individual style aspirations. Discover today!
      </p>
      <button
        className="btn btn-dark mt-4 px-4 py-2"
        onClick={() => navigate("/shop")} // 🔹 navigate on click
      >
        New Collection <span>➔</span>
      </button>

      <div
        className="d-flex justify-content-center gap-3 mt-5 px-3 flex-wrap"
        id="demo"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {models.map((model, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className="model-card"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: model.bg,
              borderRadius: "100px",
              marginBottom:"20px",
              position: "relative",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              cursor: "pointer",
              transform: i === activeIndex ? "scale(1.05)" : "scale(1)",
              boxShadow:
                i === activeIndex ? "0 8px 25px rgba(0,0,0,0.2)" : "none",
              transition: "all 0.4s ease",
              overflow: "visible",
              zIndex: i === activeIndex ? 3 : 1,
            }}
          >
            <img
              src={model.img}
              alt={`model-${i}`}
              className="model-img"
              style={{
                width: "120%",
                height: "auto",
                objectFit: "contain",
                transition: "transform 0.4s ease",
                transform:
                  hoverIndex === i ? "scale(1.15) translateY(-20px)" : "scale(1)",
                position: "absolute",
                bottom: 0,
                zIndex: 2,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
