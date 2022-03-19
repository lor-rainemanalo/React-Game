import React, { useState } from "react";
import Rodal from "rodal";

import "rodal/lib/rodal.css";

export default function Question({ question, a, b, c, bgColor }) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Rodal
      visible={isModalVisible}
      onClose={handleCancel}
      customStyles={{ backgroundColor: bgColor }} //edit modal styles here
    >
      <h2>{question}</h2>
      <button>{a}</button>
      <button>{b}</button>
      <button>{c}</button>
    </Rodal>
  );
}
