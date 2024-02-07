import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../store";

const ChoicePanel = ({ data, classx }) => {
  const dispatch = useDispatch();
  const { containerSize, containerType } = useSelector((val) => val.data);


  function update(e) {
    const text = e.target.innerHTML;

    const dispatchActions =() =>{
      dispatch(rate.load(true));
      dispatch(rate.updateData([]));
      dispatch(rate.updateFilter('COSCO'))
      dispatch(rate.updateDisplayData([]));
    }
    
    if (classx === "type") {
      if(containerType === e.target.textContent.toLowerCase() ){
        dispatch(rate.displayType(false));
      }
      else{
        dispatch(rate.displayType(false));
        dispatchActions()
        setTimeout(() => {
          dispatch(rate.updateContainerType(e.target.textContent));
        }, [2000]);
      }
  
    } 
    else {
      if(containerSize === text){
        dispatch(rate.displaySize(false));
      }
      else{
        dispatch(rate.displaySize(false));
          dispatchActions()
        setTimeout(() => {
          dispatch(rate.updateContainerSize(`${text}`));
        }, [2000]);
      }

    }
  }
  return (
    <div className={`options ${classx}`}>
      {data.map((val, index) => {
        return (
          <span
            onClick={update}
            className={`${
              val === containerSize || val.toLowerCase() === containerType
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
