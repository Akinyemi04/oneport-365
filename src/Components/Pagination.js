import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { rate } from "../store";

const Pagination = ({ data, itemsPerPage, initialLoadCount }) => {
  const dispatch = useDispatch();
  const [displayedData, setDisplayedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [show,setDisplay]=useState(false)

  useEffect(() => {
    const displayData = data.slice(0, initialLoadCount);
    dispatch(rate.updateDisplayData(displayData));
    setDisplayedData(displayData);
  }, [dispatch, data, initialLoadCount]);


  useEffect(()=>{
    if( data.length <= itemsPerPage ){
      setDisplay(false)
    } 
    else if( data.length > itemsPerPage){
      setDisplay(true)
    }
  },[data.length,itemsPerPage])



  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const newData = data.slice(0, endIndex);
    dispatch(rate.updateDisplayData(newData));
    setCurrentPage(nextPage);
    setDisplayedData(newData);
  };

  function HandleLess() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    const newData = data.slice(0, initialLoadCount);
    setCurrentPage(1);
    setDisplayedData(newData);
    dispatch(rate.updateDisplayData(newData));
  }

  return (
    <>
      {show && (
        <div className="mt-10">
          <p className="text-sm text-center mb-4">
            Viewing {displayedData.length} of {data.length} of special rates
          </p>
          {
            <center>
              {/* Load More button */}
              {currentPage < totalPages ? (
                <button onClick={handleLoadMore}>Load More</button>
              ) : (
                <button onClick={HandleLess}>Show Less</button>
              )}
            </center>
          }
        </div>
      )}
    </>
  );
};

export default Pagination;
