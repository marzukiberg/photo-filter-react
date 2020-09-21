import React from "react";

const SaveFile = ({ image }) => {
  const handleSave = () => {};
  return (
    <div className="save__container">
      <a className="save__button" href={image}>
        Save Image
      </a>
    </div>
  );
};

export default SaveFile;
