import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Display = ({text,funct}) => {
  return (
    <p onClick={funct}>
    <span>{text}</span>
    <span>
      <KeyboardArrowDownIcon />{" "}
    </span>{" "}
  </p>
  )
}

export default Display