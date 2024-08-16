import React from "react";
import { ReactComponent as ARVRIcon } from "./arvr-icon.svg"; // Make sure to replace this with the path to your SVG

const ARVRWidget = () => {
  const handleClick = () => {
    window.location.href = "https://66bb33042f3b1af1e6e3fff7--golden-salmiakki-84e398.netlify.app/";
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "100px", // Position above the chatbot
        right: "16px", // Distance from the right edge
        backgroundColor: "#000435", // Customize widget color
        width: "60px", // Circular shape
        height: "60px", // Circular shape
        borderRadius: "50%", // Circular shape
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000, // Ensures the widget stays above other elements
      }}
    >
      <ARVRIcon style={{ width: "43px", height: "43px", fill: "#FFF" }} />
    </div>
  );
};

export default ARVRWidget;
