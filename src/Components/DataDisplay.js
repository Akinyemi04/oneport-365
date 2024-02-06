import React from "react";

const DataDisplay = ({ data }) => {
  const price = data.total_amount_usd;

  let stringWithComma = price.toString();

  stringWithComma = stringWithComma.charAt(0) + "," + stringWithComma.slice(1);

  return (
    <div  className="data">
      <div className="header">
        <p className="main">{data.carrier_name}</p>
        <div>
          <p>{data.origin_port_code}</p>
          <span></span>
          <p>{data.destination_port_code}</p>
        </div>
      </div>
      <p className="price">${stringWithComma}</p>
      <div className="footer">
        <div>
          <p className="details">Sailing Date</p>
          <p>{data.sailing_date === null ? "N/A" : data.sailing_date}</p>
        </div>
        <div>
          <p className="details">Transite Time</p>
          <p>{!data.transit_time ? "N/A" : `${data.transit_time} days`}</p>
        </div>
        <div>
          <p className="details">Free Days</p>
          <p>{data.demurrage_days + data.detention_days}</p>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
