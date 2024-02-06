import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../store";
import ChoicePanel from "./ChoicePanel";
import Filter from "../Filter";
import Loader from "./Loader";
import Display from "./Display";

const ControlHub = () => {
  const dispatch = useDispatch();
  const {
    containerSizes,
    containerTypes,
    containerSize,
    containerType,
    displaySizeOption,
    displayTypeOption,
    filterArray,
    originalData,
    loading,
  } = useSelector((state) => state.data);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(rate.displayType(false));
        dispatch(rate.displaySize(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  const displaySize = () => {
    dispatch(rate.displaySize(!displaySizeOption));
    dispatch(rate.displayType(false));
  };

  const displayType = () => {
    dispatch(rate.displayType(!displayTypeOption));
    dispatch(rate.displaySize(false));
  };


  return (
    <div>
      <h1 className="text-4xl font-medium sato">Special Rates</h1>
      {!loading ? (
        <div className="flex flex-col mt-10 relative z-20 gap-x-3 gap-y-5 pb-8 md:flex-row md:justify-between border-[#f3f4f6] border-solid border-b-[1px]">
          <section ref={dropdownRef} className="flex items-center gap-x-3">
            <div className="container_T">
              <Display text={containerSize} funct={displaySize} />
              {displaySizeOption && (
                <ChoicePanel data={containerSizes} classx="size" />
              )}
            </div>
            <div className="container_T">
              <Display text={containerType.toUpperCase()} funct={displayType} />
              {displayTypeOption && (
                <ChoicePanel data={containerTypes} classx="type" />
              )}
            </div>
          </section>
          {originalData.length > 0 && <Filter data={filterArray} />}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ControlHub;
