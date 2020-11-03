import React, { useState, useEffect } from "react";
import { Cards } from "../src/components/Cards";

function App() {
  const caseNo = [
    "MC2830",
    "MC2831",
    
  ];

  const noOfCards = caseNo;
  const [cardCordinates, setCardCordinates] = useState([]);
  const [topCord, setTopCord] = useState("");
  const [isFirstTimeLoadAnim, setIsFirstTimeLoadAnim]=useState(true)
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

  const disableFirstTimeLoadAnim=(value)=>setIsFirstTimeLoadAnim(value)

  const iterateOverToCreateMultipleCards = () => {
    return cardCordinates.map((_, idx) => {
      return (
        <Cards
          cardCordinates={_}
          index={idx}
          whichCardSelected={whichCardSelected}
          caseno={_.caseno}
          disableFirstTimeLoadAnim={disableFirstTimeLoadAnim}
          isFirstTimeLoadAnim={isFirstTimeLoadAnim}
        />
      );
    });
  };

  const myfunc = (noOfCards) => {
    let cordinates = [];
    let j = 0;
    let topMost = 15;
    let BiketomMost = 0;
    if (noOfCards.length >= 10) {
      BiketomMost = 60;
    } else if (noOfCards.length < 10 && noOfCards.length >= 5) {
      BiketomMost = topMost * 3;
    } else if (noOfCards.length >= 2 && noOfCards.length < 5) {
      BiketomMost = topMost + 12;
    } else {
      BiketomMost = topMost + 5;
    }

    while (topMost < BiketomMost) {
      if (j === indexOfSelectedCard) {
        cordinates.push({
          top: topCord,
          left: "5vw",
          movedUp: true,
          caseno: caseNo[j],
        });
      } else {
        cordinates.push({
          top: 20+(j*2)+"vh",
          left: "5vw",
          movedUp: false,
          caseno: caseNo[j],
        });
      }
      topMost = topMost + (BiketomMost - 15) / noOfCards.length;
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
};

export default App;
