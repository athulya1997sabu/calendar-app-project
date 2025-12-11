import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DataPopup = ({ open, setOpen }) => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const data = useSelector((state) => state.calendar.data[selectedDate]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        width: "40%",
        background: "white",
        padding: 20,
        boxShadow: "0px 0px 10px #000",
        zIndex: 1000,
      }}
    >
      <h3>Selected Date: {selectedDate}</h3>
      {data ? (
        <BarChart width={400} height={300} data={data.map(d => Object.keys(d).map(key => ({ name: key, value: d[key] }))).flat()}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      ) : (
        <p style={{ color: "red" }}>No data found for {selectedDate}</p>
      )}
      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  );
};

export default DataPopup;
