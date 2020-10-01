import React from "react";
import ReactPlaceholder from "react-placeholder";
import "../../node_modules/react-placeholder/lib/reactPlaceholder.css";
import { RectShape } from "../../node_modules/react-placeholder/lib/placeholders";

export const PlaceHolderAnimForLoading = (props) => {
  const {
    placeholderStyle,
    noOfPlaceholder,
    placeholderClassName,
  } = props;


    const createPlaceHolder=()=>Array.from({length : `${noOfPlaceholder}`},(value,index)=>{
        // console.log(`${index}:- ${JSON.stringify(<RectShape key={index} color="grey" style={placeholderStyle} />)}`);
      return <RectShape key={index} color="grey" style={placeholderStyle} />
    })


  
  
  const awesomePlaceholder = (
    <div className={`my-awesome-placeholder ${placeholderClassName}`}>
    {createPlaceHolder()}
    </div>
  );

  return (
    <React.Fragment>
      <ReactPlaceholder
        customPlaceholder={awesomePlaceholder}
        showLoadingAnimation
      ></ReactPlaceholder>
    </React.Fragment>
  );
};

PlaceHolderAnimForLoading.defaultProps = {
  placeholderStyle: {
    width: "15vw",
    height: "35vh",
    margin: "0vh 1.2vw 4vh 1.2vw",
  },
  noOfPlaceholder: 5,
};
