import React, { useState, useEffect } from "react";
import { Cards } from "../src/components/Cards";

function App() {
  const noOfCards = Array.from({ length: 10 }, (val, idx) => idx);
  const [cardCordinates, setCardCordinates] = useState([]);
  const [topCord, setTopCord] = useState("");
  const [indexOfSelectedCard, setIndexOfSelectedCard] = useState(-1);

  useEffect(() => {
    createCardCordinates();
  }, []);

  useEffect(() => {
    indexOfSelectedCard !== -1 && topCord.length > 0 && createCardCordinates();
  }, [indexOfSelectedCard]);

  const whichCardSelected = (index, newTopCord) => {
    setIndexOfSelectedCard(index);
    setTopCord(newTopCord);
  };

  const iterateOverToCreateMultipleCards = () => {
    return cardCordinates.map((_, idx) => {
      return (
        <Cards
          cardCordinates={_}
          index={idx}
          whichCardSelected={whichCardSelected}
        />
      );
    });
  };

  const createCardCordinates = () => {
    let cordinates = [];
    for (let i = noOfCards.length - 1,j=0; i >= 0; i--,j++) {
      if (j === indexOfSelectedCard) {
        cordinates.push({
          top: topCord,
          left: 10-i+"vw",
          movedUp: true,
        });
      } else {
        cordinates.push({
          top: 60 - i * 5 + "vh",
          left: 10-i+"vw",
          movedUp: false,
        });
      }
    }
    setCardCordinates(cordinates);
  };



  return (
    <div style={styles.mainWrapper}>
      {iterateOverToCreateMultipleCards()}
    </div>
  );
}

const styles = {
  mainWrapper: {
    position: "relative",
    background: "grey",
    top: "5vh",
    left: "0vw",
    width: "80vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    padding: "1vh 0vw",
  },
  browsebtn: {
    width: "5vw",
    height: "3vh",
    background: "black",
    color: "white",
  },
};

export default App;
