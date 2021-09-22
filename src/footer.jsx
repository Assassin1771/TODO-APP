import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  let day = new Date().getDay();

  const [aTime, setAtime] = useState(time);
  const [aDate, setAdate] = useState(date);
  const [aDay, setAday] = useState(day);

  const Update = () => {
    time = new Date().toLocaleTimeString();
    setAtime(time);

    date = new Date().toLocaleDateString();
    setAdate(date);

    day = new Date().getDay().toLocaleString();
    setAday(day);
  };

  setInterval(Update, 1000);

  const arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box>
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "20px",
        }}
      >
        <h4>Developed by Assassin1771</h4>
        <br />

        <h6>{aTime}</h6>

        <h6>
          {aDate} {arr[aDay - 1]}
        </h6>
      </div>
    </Box>
  );
};

export default Footer;
