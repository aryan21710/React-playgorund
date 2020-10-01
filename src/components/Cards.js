import React, { useState, useEffect } from "react";

export const Cards = ({ cardCordinates, index, whichCardSelected, caseno }) => {
  const { top, left, movedUp } = cardCordinates;
  const [rotateCard, setRotateCard] = useState(false);
  const [topCord, setTopCord] = useState(-1);

  useEffect(() => {
    if (!movedUp) {
      setTopCord(-1);
    }
  }, [cardCordinates]);

  useEffect(() => {
    if (topCord !== -1 && !movedUp) {
      setRotateCard(true);
      whichCardSelected(index, topCord);
      setTimeout(() => {
        setRotateCard(false);
      }, 2000);
    }
  }, [topCord]);

  const slideCard = (top) => {
    const newTopCord =
      cardCordinates.length > 5
        ? Number(top.replace("vh", "")) - 14 + "vh"
        : Number(top.replace("vh", "")) - 7 + "vh";
    !movedUp && setTopCord(newTopCord);
  };

  return (
    <React.Fragment>
      <div
        onClick={() => slideCard(top)}
        style={
          rotateCard && movedUp
            ? {
                ...styles.cardWrapper,
                top: topCord,
                left: left,
              }
            : { ...styles.cardWrapper, top: top, left: left }
        }
      >
        <span className="caseno flexStyling">{caseno}</span>
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
