import React, { useState, useEffect } from "react";

export const ChangeCount = ({ showCurrentValue }) => {
  console.count(`render ChangeCount`);

  const [value, setValue] = useState(0);
  const incr = () => setValue(value + 1);
  const decr = () => setValue(value - 1);
  useEffect(() => {
    value >= 0 && showCurrentValue(value);
  }, [value]);
  return (
    <div style={styles.buttonCompWrapper}>
      <button style={styles.mybtn} onClick={incr}>
        +1
      </button>
      <button style={styles.mybtn} onClick={value > 0 && decr}>
        -1
      </button>
    </div>
  );
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
};
