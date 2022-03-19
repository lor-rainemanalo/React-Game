import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

import Category from "../components/Category";
import Header from "../components/Header";

const data = [
  {
    option: "General",
    style: { backgroundColor: "green", textColor: "#fff" },
  }, //1st way of styling, below comment is the 2nd way
  { option: "Science" },
  { option: "History" },
  { option: "Technology" },
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
      <Header />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        // backgroundColors={["blue", "black", "teal", "pink", "green"]}
        // textColors={["red"]}
        onStopSpinning={handleSpinStop}
      />
      <button onClick={handleSpinClick}>Spin</button>

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
    </>
  );
}
