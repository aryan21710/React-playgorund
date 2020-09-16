import React from 'react'

export const DisplayTitle = () => {
  console.count(`render DisplayTitle`);
    return (
        <div style={styles.mainWrapper}>
        <h1 style={styles.display}>HOOKS TESTING APP</h1>
        </div>
    )
}
const styles = {
    mainWrapper: {
      width: "50vw",
      height: "20vh",
      background: "blue",
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
  