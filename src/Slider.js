import React from "react";

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <div className="slider__container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
