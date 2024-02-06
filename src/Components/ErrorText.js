import React from "react";
import { useSelector } from "react-redux";

const ErrorText = ({ data = "originalArray" }) => {
  const loading = useSelector((state) => state.data.loading);
  const original = useSelector((state) => state.data.originalData);
  const filtered = useSelector((state) => state.data.filteredData);

  const noRatesToDisplay = <p className="mt-4">No Rates To Display</p>;

  return (
    <div>
      {!loading && (
        <div>
          {data === "originalArray" && original.length === 0 && noRatesToDisplay}
          {data !== "originalArray" && filtered.length === 0 && noRatesToDisplay}
        </div>
      )}
    </div>
  );
};

export default ErrorText;
