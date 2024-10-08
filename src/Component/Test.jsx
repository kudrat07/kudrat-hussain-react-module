import  { useState } from "react";

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("white"); // Default background color

  // Function to handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  return (
    <div
      style={{
        backgroundColor: selectedColor,
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Select a Color:</h2>

      {/* Divs as color options */}
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          onClick={() => handleColorClick("#2f2f2f")}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "black",
            cursor: "pointer",
            border: selectedColor === "red" ? "3px solid black" : "none",
          }}
        ></div>

        <div
          onClick={() => handleColorClick("green")}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "green",
            cursor: "pointer",
            border: selectedColor === "green" ? "3px solid black" : "none",
          }}
        ></div>

        <div
          onClick={() => handleColorClick("blue")}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
            cursor: "pointer",
            border: selectedColor === "blue" ? "3px solid black" : "none",
          }}
        ></div>

        <div
          onClick={() => handleColorClick("yellow")}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "yellow",
            cursor: "pointer",
            border: selectedColor === "yellow" ? "3px solid black" : "none",
          }}
        ></div>
      </div>

      {/* Display content based on selected color */}
      <div style={{ marginTop: "20px" }}>
        {"red" && (
          <p>
            You have selected <strong>{selectedColor}</strong> color!
          </p>
        )}
      </div>
    </div>
  );
}

export default ColorSelector;
