import React, { useState, useEffect } from "react";

export const Cards = ({ cardCordinates }) => {
  const { top, left } = cardCordinates;
  const [rotateCard, setRotateCard] = useState(false);
  const [topCord, setTopCord] = useState(0);

  const slideCard = (top) => {
    const newTopCord = Number(top.replace("vh", "")) - 12 + "vh";
    setTopCord(newTopCord);
    setRotateCard(true);
  };
  return (
    <React.Fragment>
      <div
        onClick={() => slideCard(top)}
        style={
          rotateCard
            ? {
                ...styles.cardWrapper,
                top: topCord,
                left: left,
              }
            : { ...styles.cardWrapper, top: top, left: left }
        }
      >
        <span className="caseno flexStyling">MC2830-2017</span>
        <span className="pet flexStyling">PETITIONER</span>
        <span className="resp flexStyling">RESPONDENT</span>
        <span className="divider"></span>
        <span className="petName flexStyling">ARYAN SHARMA</span>
        <span className="respName flexStyling">SUNNY LEONE</span>
      </div>
    </React.Fragment>
  );
};

const styles = {
  cardWrapper: {
    width: "20vw",
    background: "black",
    borderRadius: "20px",
    border: "1px solid white",
    display: "grid",
    gridTemplateColumns: "10vw 10vw",
    gridTemplateRows: "8vh 6vh 6vh",
    position: "absolute",
    top: "10vh",
    left: "10vw",
    cursor: "pointer",
    transition: "top 0.2s linear",
  },
  cardPlacement: {
    position: "absolute",
    top: "10vh",
    left: "10vw",
  },
  moveCard: {
    top: "4vh",
  },
};
