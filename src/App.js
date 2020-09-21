import React, { useState } from "react";
import Slider from "./Slider";
import "./App.css";
import SidebarItem from "./SidebarItem";
import ImagePicker from "./ImagePicker";
import SaveFile from "./SaveFile";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

const App = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2017/10/28/18/17/trees-2897757_960_720.jpg"
  );
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };

  return (
    <div className="container">
      {/* <div className="main-image" style={getImageStyle()} /> */}
      <div className="container__row">
        <div className="container__image">
          <img
            src={image}
            className="container__imageMain"
            style={getImageStyle()}
          />
        </div>
        <div className="sidebar">
          {options?.map((option, index) => {
            return (
              <SidebarItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="container__row">
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
      </div>
      <div className="container__row">
        <ImagePicker setImage={setImage} />
        {/* <SaveFile image={image} /> */}
      </div>
    </div>
  );
};

export default App;
