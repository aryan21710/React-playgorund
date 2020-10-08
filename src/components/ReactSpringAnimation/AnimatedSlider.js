import React, { useState,useEffect } from 'react';
import styled from 'styled-components';

export const AnimatedSlider = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(()=>{
        isClicked ? setLoadingPercentage(100) :  setLoadingPercentage(0)
    },[isClicked])

	const MainWrapper = styled.div`
		width: 50vw;
		height: 50vh;
		background: grey;
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	const Slider = styled.div`
		width: 30vw;
		height: 5vh;
        border: 2px solid white;
        display: flex;
		align-items: center;
        justify-content: center;
        color: white
	`;
	return (
		<MainWrapper>
			<Slider
				style={isClicked ? { background: 'red' } : { background: '' }}
				onClick={() => setIsClicked(!isClicked)}
			>{loadingPercentage}</Slider>
		</MainWrapper>
	);
};
