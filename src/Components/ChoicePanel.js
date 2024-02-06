import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../store";

const ChoicePanel = ({ data, classx }) => {
  const dispatch = useDispatch();
  const { containerSize, containerType } = useSelector((val) => val.data);

  function update(e) {
    const text = e.target.innerHTML;

    if (classx === "type") {
      dispatch(rate.updateContainerType(e.target.textContent));
      dispatch(rate.displayType(false));
      dispatch(rate.load(true));
      dispatch(rate.updateDisplayData([]));
      setTimeout(() => {
        dispatch(rate.updateContainerType(e.target.textContent));
      }, [2000]);
    } else {
      dispatch(rate.displaySize(false));
      dispatch(rate.load(true));
      dispatch(rate.updateDisplayData([]));
      setTimeout(() => {
        dispatch(rate.updateContainerSize(`${text}`));
      }, [2000]);
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
