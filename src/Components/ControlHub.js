import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../store";
import ChoicePanel from "./ChoicePanel";
import Filter from "../Filter";
import Display from "./Display";
import { useEffect,useRef } from "react";

const ControlHub = () => {
  const dispatch = useDispatch();
  const containerSizes = useSelector((val) => {
    return val.data.containerSizes;
  });
  const containerTypes = useSelector((val) => {
    return val.data.containerTypes;
  });
  const activeContainerSize = useSelector((val) => {
    return val.data.containerSize;
  });
  const activeContainerType = useSelector((val) => {
    return val.data.containerType;
  });
  const displaySizeOption = useSelector((val) => {
    return val.data.displaySizeOption;
  });
  const displayTypeOption = useSelector((val) => {
    return val.data.displayTypeOption;
  });
  const filterArray = useSelector((val) => {
    return val.data.filterArray;
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(rate.displayType(false));
        dispatch(rate.displaySize(false));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch]);

  function displaySize() {
    dispatch(rate.displaySize(!displaySizeOption));
    dispatch(rate.displayType(false));
  }
  function displayType() {
    dispatch(rate.displayType(!displayTypeOption));
    dispatch(rate.displaySize(false));
  }

  return (
    <div>
      <h1 className="text-[40px] font-medium sato">Special Rates</h1>
      <div className="flex flex-col mt-10 relative z-\[20\] gap-x-3 gap-y-5 pb-8  md:flex-row md:justify-between border-[#f3f4f6] border-solid border-b-[1px]">
        <section ref={dropdownRef} className="flex items-center gap-x-3">
          <div className="container_T">
            <Display text={activeContainerSize} funct={displaySize} />
            {displaySizeOption && (
              <ChoicePanel data={containerSizes} classx={"size"} />
            )}
          </div>
          <div className="container_T ">
            <Display
              text={activeContainerType.toUpperCase()}
              funct={displayType}
            />
            {displayTypeOption && (
              <ChoicePanel data={containerTypes} classx={"type"} />
            )}
          </div>
        </section>
        <Filter data={filterArray} />
      </div>
    </div>
  );
};

export default ControlHub;
