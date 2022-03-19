import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div className="screen">
        <div>
          <p className="triviaTxt">Trivia Text</p>
          <p className="triviaNo">Trivia #</p>
          <p className="categoryTxt">GEO</p>
          <br />
          <button className="startBtn">START</button>
          <br />
          <button className="choiceBtn">This is a choice</button>
          <br />
          <button className="choiceWrong">This is a wrong choice</button>
          <br />
          <button className="choiceRight">This is a right choice</button>
          <br />
          <button className="spinAgainBtn">SPIN AGAIN</button>
          <br />
        </div>
      </div>
    );
  }
}

export default Name;
