import React from "react";
// import "./Button.css"; // Import CSS file for button styles

function Button(props) {
  const buttonStyle = {
    backgroundColor: "#0074d9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        alert(`${props.product} has been ${props.buttonType}.`);
      }}
    >
      {props.buttonType}
    </button>
  );
}

export default Button;
