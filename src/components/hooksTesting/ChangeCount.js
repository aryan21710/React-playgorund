import React, { useState, useEffect } from "react";

export const ChangeCount = ({ showCurrentValue }) => {
  console.count(`render ChangeCount`);

  const [value, setValue] = useState(0);
  const incr = () => setValue(value + 1);
  const decr = () => setValue(value - 1);

 
  useEffect(() => {
    const myfunc=()=> {
      value >= 0 && showCurrentValue(value);
    }
    myfunc();
  }, [value,showCurrentValue])
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
}

// const checkPropsValue=(prevProps,nextProps)=>{
//   if (prevProps.showCurrentValue === nextProps.showCurrentValue) {
//     return true
//   }
  
// }

// export const ChangeCount=React.memo(MemoizedValue,checkPropsValue)
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


// ChangeCount.whyDidYouRender(React, {
//   onlyLogs: true,
//   titleColor: "green",
//   diffNameColor: "aqua",
//   logOnDifferentValues: true,
//   customName: 'ChangeCount'
// });


ChangeCount.whyDidYouRender=true;
 