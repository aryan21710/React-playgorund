import React, { useState, useEffect } from "react";
import { Cards } from "../src/components/Cards";

function App() {
  const noOfCards = Array.from({ length: 3 }, (val, idx) => idx);
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

  const myfunc = (noOfCards) => {
    let cordinates = [];
    let j = 0;
    let topMost = 15;
    let bottomMost = 0;
    if (noOfCards.length >= 10) {
      bottomMost = 60;
    } else if (noOfCards.length < 10 && noOfCards.length >= 5) {
      bottomMost = topMost * 3;
    } else if (noOfCards.length >= 2 && noOfCards.length < 5) {
      bottomMost = topMost + 12;
    } else {
      bottomMost = topMost + 5;

    }

    while (topMost <= bottomMost) {
      if (j === indexOfSelectedCard) {
        cordinates.push({
          top: topCord,
          left: "5vw",
          movedUp: true,
        });
      } else {
        cordinates.push({
          top: topMost + "vh",
          left: "5vw",
          movedUp: false,
        });
      }
      topMost = topMost + (bottomMost - 15) / noOfCards.length;
      j += 1;
    }
    return cordinates;
  };

  const createCardCordinates = () => {
    let cordinates = [];
    cordinates = myfunc(noOfCards);
    setCardCordinates(cordinates);
  };

  return (
    <div style={styles.mainWrapper}>{iterateOverToCreateMultipleCards()}</div>
  );
}

const styles = {
  mainWrapper: {
    position: "relative",
    background: "grey",
    top: "10vh",
    left: "0vw",
    width: "80vw",
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    padding: "0vh 0vw",
  },
  browsebtn: {
    width: "5vw",
    height: "3vh",
    background: "black",
    color: "white",
  },
};

export default App;
