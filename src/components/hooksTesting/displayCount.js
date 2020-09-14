import React from "react";

export const DisplayCount = ({ count }) => {
    console.count(`render DisplayCount`)

  return (
    <div style={styles.mainWrapper}>
      <h1 style={styles.display}>THE CURRENT VALUE IS {count}</h1>
    </div>
  );
};
const styles = {
  mainWrapper: {
    width: "50vw",
    height: "20vh",
    background: "pink",
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
