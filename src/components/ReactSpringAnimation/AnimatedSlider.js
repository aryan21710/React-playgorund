import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

export const AnimatedSlider = () => {
	const [isClicked, setIsClicked] = useState(false);
	const props = useSpring({
		width: isClicked ? 300 : 0,
        backgroundColor: isClicked ? 'red' : 'grey',
        config:config.slow,
		// config: {
        //     mass: 10,
        //     friction: 26,
        //     tension: 500,
        //     velocity: 1,
        //     clamp: false,
        //     easing: 'ease-in-out',
		// },
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
		width: 298px;
		height: 30px;
		border: 2px solid white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		position: absolute;
		top: 20vh;
		left: 7vw;
        z-index: 1;
        overflow: hidden;
	`;

	const AnimSlider = styled(animated.div)`
		height: 34px;
		position: absolute;
		top: 20vh;
		left: 7vw;
		z-index: 0;
	`;
	return (
		<MainWrapper>
			<SliderWrapper onClick={() => setIsClicked(!isClicked)}>
				{props.width.interpolate((x) => Math.floor(x/3))}
			</SliderWrapper>
			<AnimSlider style={props}></AnimSlider>
		</MainWrapper>
	);
};
