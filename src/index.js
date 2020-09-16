import "./wdyr";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/hooksTesting/ErrorBoundary";

const DisplayTitle = () => {
  console.count(`render DisplayTitle`);
  return (
    <div style={styles.mainWrapper3}>
      <h1 style={styles.display3}>HOOKS TESTING APP</h1>
    </div>
  );
};

const DisplayCount = () => {
  console.count(`render DisplayCount`);
  const { count } = useContext(CountContext);
  return (
    <div style={styles.mainWrapper2}>
      <h1 style={styles.display2}>THE CURRENT VALUE IS {count}</h1>
    </div>
  );
};

const MemoizedValue = () => {
  console.count(`render ChangeCount  `);
  const { count, setCount } = useContext(CountContext);

  const incr = () => setCount(count + 1);
  const decr = () => count > 0 && setCount(count - 1);

  return (
    <div style={styles.buttonCompWrapper}>
      <button style={styles.mybtn} onClick={incr}>
        +1
      </button>
      <button style={styles.mybtn} onClick={decr}>
        -1
      </button>
    </div>
  );
};

// const checkPropsValue=(prevProps,nextProps)=>{
//   console.log(`${typeof prevProps.showCurrentValue} && ${nextProps.showCurrentValue}`)
//   console.log(`comparison status:- ${prevProps.showCurrentValue === nextProps.showCurrentValue}`)

//   if (prevProps.showCurrentValue === nextProps.showCurrentValue) {
//     return false
//   }
// }

export const ChangeCount = React.memo(MemoizedValue);

const CountContext = React.createContext();
const Parent = () => {
  console.count(`render Parent`);
  const [count, setCount] = useState(0);

  return (
    <div style={styles.mainWrapper1}>
      <CountContext.Provider value={{ count, setCount }}>
        <ErrorBoundary>
          <DisplayTitle />
          <DisplayCount />
          <ChangeCount />
        </ErrorBoundary>
      </CountContext.Provider>
    </div>
  );
};

Parent.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "Parent",
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua",
};

ChangeCount.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "ChangeCount",
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua",
};

DisplayCount.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "DisplayCount",
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "aqua",
};


const styles = {
  buttonCompWrapper: {
    width: "50vw",
    height: "20vh",
    background: "grey",
  },
  mybtn: {
    margin: "1vh 2vw",
    padding: "1vh 1vw",
    background: "pink",
  },
  mainWrapper1: {
    width: "90vw",
    height: "90vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    aliginItems: "center",
  },

  display1: {
    color: "white",
    fontSize: "2vw",
  },
  mainWrapper2: {
    width: "50vw",
    height: "20vh",
    background: "pink",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    aliginItems: "center",
  },

  display2: {
    color: "white",
    fontSize: "2vw",
  },
  mainWrapper3: {
    width: "50vw",
    height: "20vh",
    background: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    aliginItems: "center",
  },

  display3: {
    color: "white",
    fontSize: "2vw",
  },
};



ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById("root")
);
