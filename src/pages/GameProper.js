import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

import Category from "../components/Category";
import Header from "../components/Header";

const data = [
  {
    option: "General",
    style: { backgroundColor: "#6BE4FF", textColor: "#fff" },
  }, //1st way of styling, below comment is the 2nd way
  {
    option: "Science",
    style: { backgroundColor: "#5F3CA8", textColor: "#fff" },
  },
  {
    option: "History",
    style: { backgroundColor: "#4967B4", textColor: "#fff" },
  },
  {
    option: "Technology",
    style: { backgroundColor: "#E088FF", textColor: "#fff" },
  },
];

export default function GameProper() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    setMustSpin(false);
  };

  return (
    <>
      <div>
        <div className="screen">
          <Header />
          <center>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              // backgroundColors={["blue", "black", "teal", "pink", "green"]}
              // textColors={["red"]}
              onStopSpinning={handleSpinStop}
            />
          </center>

          <button
            className="startBtn"
            onClick={handleSpinClick}
            style={{ margin: "50px 0" }}
          >
            SPIN
          </button>
        </div>
        {!mustSpin && prizeNumber === 0 && (
          <Category bgColor="green" category="General" />
        )}
        {!mustSpin && prizeNumber === 1 && (
          <Category bgColor="pink" category="Science" />
        )}
        {!mustSpin && prizeNumber === 2 && (
          <Category bgColor="purple" category="History" />
        )}
        {!mustSpin && prizeNumber === 3 && (
          <Category bgColor="blue" category="Technology" />
        )}
      </div>
    </>
  );
}
