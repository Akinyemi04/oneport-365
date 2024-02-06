import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApiData from "../Hooks/useApiData";
import { rate } from "../store";
import DataDisplay from "./DataDisplay";
import Pagination from "./Pagination";
import ErrorText from "./ErrorText";

const ApiDataRender = () => {
  const dispatch = useDispatch();
  const {
    containerSize,
    containerType,
    filter,
    displayData,
    originalData,
    filteredData,
  } = useSelector((state) => state.data);

  // const loading = false;
  // const error = false;

  const { data, loading, error } = useApiData(
    containerSize,
    containerType
  );
  useEffect(() => {
    const newArray = originalData.filter(
      (item) => item.carrier_name === filter
    );
    dispatch(rate.filtered(newArray));
  }, [dispatch, originalData, filter]);

  useEffect(() => {
    dispatch(rate.load(loading));
  }, [dispatch, loading,containerType,containerSize]);

  useEffect(() => {
    if(data){
      // const data = JSON.parse(localStorage.getItem("onport"));
      dispatch(rate.updateData(data.data.rates));
    }

  }, [dispatch,data,containerType,containerSize]);

  return (
    <div>
      {!error && (
        <>
          <ErrorText data="filteredArray" />
          <section className="parent_Data">
            {displayData.map((val, indx) => {
              return (
                <div key={indx}>
                  <DataDisplay  data={val} />
                </div>
              );
            })}
          </section>

          {originalData.length > 0 && (
            <Pagination
              data={filteredData}
              itemsPerPage={9}
              initialLoadCount={9}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ApiDataRender;
