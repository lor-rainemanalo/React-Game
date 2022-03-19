import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

import Question from "./Question";

const data = [
  {
    option: "Science",
    style: { backgroundColor: "green", textColor: "#fff" },
  }, //1st way of styling, below comment is the 2nd way
  { option: "Geography" },
  { option: "Math" },
  { option: "Physics" },
  { option: "History" },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    setIsModalVisible(true);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["blue", "black", "teal", "pink", "green"]}
        // textColors={["red"]}
        onStopSpinning={handleSpinStop}
      />
      <button onClick={handleSpinClick}>Spin</button>

      {!mustSpin && prizeNumber === 0 && (
        <Question
          bgColor="green"
          question="This is a science question"
          a="atom"
          b="cat"
          c="rv"
        />
      )}
      {!mustSpin && prizeNumber === 1 && (
        <Question
          bgColor="pink"
          question="This is a geo question"
          a="geo"
          b="oeg"
          c="gege"
        />
      )}
      {!mustSpin && prizeNumber === 2 && (
        <Question
          bgColor="purple"
          question="This is a math question"
          a="mathematics"
          b="mtap"
          c="htam"
        />
      )}
      {!mustSpin && prizeNumber === 3 && (
        <Question
          bgColor="blue"
          question="This is a physics question"
          a="ph"
          b="p6"
          c="no"
        />
      )}
      {!mustSpin && prizeNumber === 4 && (
        <Question
          bgColor="teal"
          question="This is a history question"
          a="map"
          b="globe"
          c="hekasi"
        />
      )}
    </>
  );
}
