import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Category from "../components/Category";
import Header from "../components/Header";
import Frame3 from "../components/images/Frame 3.png";

const data = [
  {
    option: "🔥",
  },
  {
    option: "🔬",
  },
  {
    option: "💂🏻‍♂️",
  },
  {
    option: "💻",
  },
  {
    option: "⭐",
  },
  {
    option: "🧪",
  },
  {
    option: "📚",
  },
  {
    option: "📱",
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
              outerBorderWidth={5}
              outerBorderColor={"#393359"}
              radiusLineWidth={5}
              radiusLineColor={"#393359"}
              backgroundColors={["#bfb8da", "#e8b7d4", "#a5678e", "#7facd6"]}
              onStopSpinning={handleSpinStop}
              fontSize={50}
              perpendicularText={true}
            />
          </center>

          <button
            className="startBtn"
            onClick={handleSpinClick}
            style={{ margin: "35px 0" }}
          >
            SPIN
          </button>
        </div>
        {!mustSpin && prizeNumber === 0 && (
          <Category bgColor="#393359" category=" General" />
        )}
        {!mustSpin && prizeNumber === 1 && (
          <Category bgColor="#393359" category=" Science" />
        )}
        {!mustSpin && prizeNumber === 2 && (
          <Category bgColor="#393359" category=" History" />
        )}
        {!mustSpin && prizeNumber === 3 && (
          <Category bgColor="#393359" category=" Technology" />
        )}
        {!mustSpin && prizeNumber === 4 && (
          <Category bgColor="#393359" category=" General" />
        )}
        {!mustSpin && prizeNumber === 5 && (
          <Category bgColor="#393359" category=" Science" />
        )}
        {!mustSpin && prizeNumber === 6 && (
          <Category bgColor="#393359" category=" History" />
        )}
        {!mustSpin && prizeNumber === 7 && (
          <Category bgColor="#393359" category=" Technology" />
        )}
      </div>
    </>
  );
}
