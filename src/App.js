import React, { useState, useEffect } from "react";
import { Cards } from "../src/components/Cards";

function App() {
  const noOfCards = Array.from({ length: 100 }, (val, idx) => idx);
  const [cardCordinates, setCardCordinates] = useState([]);

  useEffect(() => {
    cardCordinates.length === 0 && createCardCordinates();
  }, []);

  const iterateOverToCreateMultipleCards = () => {
    return cardCordinates.map((_,idx) => {
      return <Cards cardCordinates={_} index={idx}/>;
    });
  };

  const createCardCordinates = () => {
    let cordinates = [];
    for (let i = noOfCards.length - 1; i >= 0; i--) {
      cordinates.push({
        top: 40 - i * 5 + "vh",
        left: 15 - i + "vw",
      });
    }
    setCardCordinates(cordinates);
  };

  // 36,40

  return (
    <div style={styles.mainWrapper}>
      {cardCordinates.length > 0 && iterateOverToCreateMultipleCards()}
    </div>
  );
}

const styles = {
  mainWrapper: {
    position: "relative",
    background: "grey",
    top: "5vh",
    left: "2vw",
    width: "80vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
  },
  browsebtn: {
    width: "5vw",
    height: "3vh",
    background: "black",
    color: "white",
  },
};

export default App;
