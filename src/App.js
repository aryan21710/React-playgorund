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
    let i=15;
    let j=0;
  while (i <= 60) {
    if (j === indexOfSelectedCard) {
      cordinates.push({
        top: topCord,
        left: (30/noOfCards.length)*j+"vw",
        movedUp: true,
      });
    } else {
      cordinates.push({
        top: i + "vh",
        left: (30/noOfCards.length)*j+"vw",
        movedUp: false,
      });
    }
    i=i+((60-15)/noOfCards.length);
    j=j+1
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
