import React from "react";

const ImagePicker = ({ setImage }) => {
  const handleChange = (e) => {
    if (!e.target.files[0].type.includes("image"))
      return alert("File must be an Image");

    return setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="image__pickerContainer">
      <label for="image__pickerInput" className="image__pickerLabel">
        Pick an Image from Local Storage
      </label>
      <input
        type="file"
        className="image__pickerInput"
        id="image__pickerInput"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImagePicker;
