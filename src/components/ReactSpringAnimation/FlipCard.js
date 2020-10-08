import React, { useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import apple from '../../images/apple_raw.png';
import google from '../../images/googleIcon.png';

export const FlipCard = () => {
	const [isClicked, setIsClicked] = useState(false);
	const propsFront = useSpring({
		transform: isClicked ? 'perspective(600px) rotateX(180deg)' : 'perspective(600px) rotateX(0deg)',
		config: config.slow,
	});

	const propsBack = useSpring({
		transform: isClicked ? 'perspective(600px) rotateX(0deg)' : 'perspective(600px) rotateX(-180deg)',
		config: config.slow,
	});

	const MainWrapper = styled(animated.div)`
		width: 70vw;
		height: 70vh;
		background: grey;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	`;

	const FlipWrapper = styled(animated.div)`
		width: 40vw;
		height: 40vh;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	`;

	const Front = styled(animated.div)`
		width: 40vw;
		height: 40vh;
		background-size: 20%;
		object-fit: cover;
		position: absolute;
		top: 0vh;
		left: 0vw;
		backface-visibility: hidden;
		background-image: url(${google});
		backgroud-position: center;
		background-repeat: repeat;
	`;

	const Back = styled(animated.div)`
		width: 40vw;
		height: 40vh;
		background-size: 20%;
		object-fit: cover;
		position: absolute;
		top: 0vh;
		left: 0vw;
		backface-visibility: hidden;
		background-image: url(${apple});
		backgroud-position: center;
		background-repeat: repeat;
	`;
	return (
		<MainWrapper>
			<FlipWrapper>
				<Front style={propsFront} onClick={() => setIsClicked(!isClicked)} />
				<Back style={propsBack} onClick={() => setIsClicked(!isClicked)} />
			</FlipWrapper>
		</MainWrapper>
	);
};
