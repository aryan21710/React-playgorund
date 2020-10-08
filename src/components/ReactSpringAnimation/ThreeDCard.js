import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import apple from '../../images/apple_raw.png';

export const ThreeDCard = () => {
	const [isClicked, setIsClicked] = useState(false);
	const props = useSpring({
        transform: isClicked ? 'perspective(500px) scaleZ(2.5) translateZ(40px)' : 'perspective(500px) scaleZ(1) translateZ(0px)',
        boxShadow : isClicked ? "2px 2px 10px 10px white" : "0px 0px 0px 0px white",
		// config: config.wobbly,
		config: {
		    mass: 1,
		    friction: 12,
		    tension: 500,
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
	const ImageWrapper = styled(animated.div)`
		width: 20vw;
        height: 20vh;
		border: 5px solid black;
        position: absolute;
        background-size: contain;
        background-position: center; /* Center the image */
		top: 10vh;
		left: 7vw;
		z-index: 100;
		background-image: url(${apple});
	`;

	return (
		<MainWrapper>
			<ImageWrapper style={props} onClick={() => setIsClicked(!isClicked)} />
		</MainWrapper>
	);
};
