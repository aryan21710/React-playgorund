import React, { useState, useEffect } from "react";
import { ChangeCount } from "./ChangeCount";
import {DisplayCount} from './DisplayCount'
import {DisplayTitle} from './DisplayTitle'


export const Parent = () => {
    console.count(`render Parent`)
  const [count, setCount] = useState(0);

  const showCurrentValue = (value) => setCount(value);
  return (
    <div style={styles.mainWrapper}>
      <DisplayTitle/>
    <DisplayCount count={count}></DisplayCount>
      <ChangeCount showCurrentValue={showCurrentValue}></ChangeCount>
    </div>
  );
};

const styles = {
  mainWrapper: {
    width: "90vw",
    height: "90vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    aliginItems: "center",
  },

  display: {
    color: "white",
    fontSize: "2vw",
  },
};
