import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const IconButtonComponent = () => {
  const handleClick = () => {
    alert("IconButton clicado!");
  };

  return (
    <IconButton color="secondary" onClick={handleClick}>
      <AddIcon />
    </IconButton>
  );
};

export default IconButtonComponent;
