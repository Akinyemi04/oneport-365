import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "./store";
const Filter = ({ data }) => {
  const dispatch = useDispatch();
  const filter = useSelector((val) => {
    return val.data.filter;
  });

  function updateFilter(e) {
    dispatch(rate.updateFilter(e.target.innerHTML));
  }
  return (
    <section className="filter">
      {data.map((val, index) => {
        return (
          <span
            onClick={updateFilter}
            className={`${val === filter ? "filtered" : ""}`}
            key={index}
          >
            {val}
          </span>
        );
      })}
    </section>
  );
};

export default Filter;
