import React, { useState, useEffect } from "react";

export const Cards = ({ cardCordinates, index, whichCardSelected, caseno,disableFirstTimeLoadAnim,isFirstTimeLoadAnim }) => {
  const { top, left, movedUp } = cardCordinates;
  const [rotateCard, setRotateCard] = useState(false);
  const [topCord, setTopCord] = useState(-1);
  const [initialStyle,setInitialStyle]=useState({
    ...styles.cardWrapper, top: "-20vh", left: left
  })

  useEffect(() => {
    if (!movedUp) {
      setTopCord(-1);
    }
  }, [cardCordinates]);

  useEffect(() => {

    if (topCord !== -1 && !movedUp) {
      setRotateCard(true);
      setInitialStyle({ ...styles.cardWrapper,
        top: topCord,
        left: left})
      whichCardSelected(index, topCord);
      setTimeout(() => {
        setRotateCard(false);
      }, 2000);
    }
  }, [topCord]);


  useEffect(()=>{
    setInitialStyle({...initialStyle, top: `${top}`, transition: "top 1s linear 0.2s"})
    disableFirstTimeLoadAnim(false);
  },[])

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
            : initialStyle
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
    cursor: "pointer",
    transition: "all 0.2s linear"
  },
};
