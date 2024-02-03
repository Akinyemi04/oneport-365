import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../store";

const ChoicePanel = ({ data, classx }) => {
  const dispatch = useDispatch();
  const activeContainerSize = useSelector((val) => {
    return val.data.containerSize;
  });
  const activeContainerType = useSelector((val) => {
    return val.data.containerType;
  });


  function update(e){
    const text = e.target.innerHTML
    console.log(text)
    if(classx === 'type'){
        dispatch(rate.updateContainerType(e.target.textContent))
    }
    else{
        dispatch(rate.updateContainerSize(`${text}`))
    }
  }
  return (
    <div className={`options ${classx}`}>
      {data.map((val, index) => {
        return (
          <span
          onClick={update}
            className={`${
              val === activeContainerSize ||
              val.toLowerCase() === activeContainerType
                ? "active"
                : ""
            }`}
            key={index}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default ChoicePanel;
