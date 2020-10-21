import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import sfo from '../../images/sfo.jpg';
import apple from '../../images/apple_raw.png';
import justice from '../../images/justice.jpg';
import fbIcon from '../../images/fbIcon.png';

export const AnimBetnComp = () => {
	const imgArray = [].concat(sfo, apple, justice, fbIcon, sfo, apple);

	const [getIndex, setGetIndex] = useState(-1);
	const [imgname, setImgname] = useState('');
	const [count, setCount] = useState(0);

	const [clickCount, setClickCount] = useState(() =>
		Array(6)
			.fill('')
			.map(() => ({
				status: false,
				animated: false,
				imgname: '',
				index: -1,
			}))
	);

	useEffect(() => {
		if (getIndex > -1) {
			const _ = clickCount.map((_, idx) => {
				if (idx === count - 1) {
					return {
						status: true,
						animated: true,
						imgname: imgname,
						index: count - 1,
					};
				} else if (_.animated && idx !== count) {
					return {
						status: false,
						animated: true,
						imgname: _.imgname,
						index: _.index,
					};
				} else {
					return {
						status: false,
						animated: false,
						imgname: _.imgname,
						index: _.index,
					};
				}
			});
			console.log(`updated is ${JSON.stringify(_)}`);

			setClickCount(_);
		}
	}, [getIndex]);

	useEffect(() => {}, []);

	const animateNow = (e) => {
		setGetIndex(e.target.dataset.index);
		setImgname(e.target.dataset.imgname);
		setCount(count + 1);
	};

	const UpperChildWrapper = styled.div`
		flex: 1;
		background: grey;
		border: 2px solid white;
		justify-content: center;
		align-items: center;
		display: flex;
		position: relative;
		overflow: hidden;
	`;

	const LowerChildWrapper = styled.div`
		background: grey;
		border: 2px solid white;
		justify-content: center;
		align-items: center;
		display: flex;
		position: relative;
		overflow: hidden;
		width: 15vw;
	`;
	const InputWrapper = styled.div`
		width: 100vw;
		height: 50vh;
		display: flex;
	`;

	const ImageWrapper = styled.img`
		height: 130px;
		width: 130px;
		border-radius: 50%;
		cursor: pointer;
	`;

	const UnAnimatedWrapper = styled.div`
		height: 30vh;
		width: 30vw;
		position: absolute;
		left: ${(props) => props.leftPos || '-30vw'};
		background-image: url(${(props) => props.imgname});
		background-position: center;
		background-repeat: no-repeat;
		background-size: 130px 130px;
		border-radius: 50%;
		border: 2px solid ${(props) => props.borderColor};
		height: 130px;
		width: 130px;
	`;

	const slide = keyframes`
    from {
      transform: translate(0vw);
    }
  
    to {
      transform: translate(35vw);
    }
  `;

	const AnimatedWrapper = styled(UnAnimatedWrapper)`
		animation: ${slide} 0.5s ease-in-out forwards;
		background-image: url(${(props) => props.imgname});
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 50%;
		height: 130px;
		width: 130px;
		border: 2px solid ${(props) => props.borderColor};
	`;

	const conditionForAnimation = (_) => _.index >= 0;

	return (
		<React.Fragment>
			<InputWrapper>
				{imgArray.map((_, idx) => (
					<UpperChildWrapper>
						<ImageWrapper src={_} onClick={animateNow} data-index={idx} data-imgname={_} />
					</UpperChildWrapper>
				))}
			</InputWrapper>
			<InputWrapper>
				{clickCount.map((_, idx) => {
					{
						if (conditionForAnimation(_) && _.status) {
							return (
								<LowerChildWrapper>
									<AnimatedWrapper borderColor="green" imgname={_.imgname} />
								</LowerChildWrapper>
							);
						} else if (!_.status && _.animated && conditionForAnimation(_)) {
							return (
								<LowerChildWrapper>
									<UnAnimatedWrapper borderColor="yellow" imgname={_.imgname} leftPos="5vw" />
								</LowerChildWrapper>
							);
						} else {
							return (
								<LowerChildWrapper>
									<UnAnimatedWrapper borderColor="red" />
								</LowerChildWrapper>
							);
						}
					}
				})}
			</InputWrapper>
		</React.Fragment>
	);
};

/*
LowerChildWrapper>
                    if (_.status && _.animated ) {
                            return (<LowerChildWrapper><AnimatedWrapper imgname={imgname}/></LowerChildWrapper>)
                    } else if (!_.status &&! _.animated) {
                           return  (<LowerChildWrapper><UnAnimatedWrapper /></LowerChildWrapper>)
                    } else if (!_.status && _.animated) {
                        return (<LowerChildWrapper><UnAnimatedWrapper imgname={imgname} left="15vw"/></LowerChildWrapper>)
                    }



*/
