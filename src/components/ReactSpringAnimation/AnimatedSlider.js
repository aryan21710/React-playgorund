import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

export const AnimatedSlider = () => {
	const [isClicked, setIsClicked] = useState(false);
	const props = useSpring({
		width: isClicked ? 100 : 0,
		backgroundColor: isClicked ? 'red' : 'grey',
		config: {
			duration: 2000,
			delay: 1000,
		},
	});

	const MainWrapper = styled(animated.div)`
		width: 50vw;
		height: 50vh;
		background: grey;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		top: 0vh;
		left: 0vw;
	`;
	const SliderWrapper = styled(animated.div)`
		width: 98px;
		height: 30px;
		border: 2px solid white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		position: absolute;
		top: 20vh;
		left: 10vw;
		z-index: 1;
	`;

	const AnimSlider = styled(animated.div)`
		height: 34px;
		position: absolute;
		top: 20vh;
		left: 10vw;
		z-index: 0;
	`;
	return (
		<MainWrapper>
			<SliderWrapper onClick={() => setIsClicked(!isClicked)}>
				{props.width.interpolate((x) => Math.floor(x))}
			</SliderWrapper>
			<AnimSlider style={props}></AnimSlider>
		</MainWrapper>
	);
};
