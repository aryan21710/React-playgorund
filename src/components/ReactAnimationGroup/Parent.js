import React, { useState, useEffect } from 'react';
import sfo from '../../images/sfo.jpg';
import apple from '../../images/apple_raw.png';
import justice from '../../images/justice.jpg';
import fbIcon from '../../images/fbIcon.png';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export const Parent = () => {
	const imgArray = [].concat(sfo, apple, justice, fbIcon);
	const [imgArrayIdx, setImgArrayIdx] = useState(0);
	const nextImage = () => imgArrayIdx < imgArray.length - 1 && setImgArrayIdx(imgArrayIdx + 1);
	const prevImage = () => imgArrayIdx > 0 && setImgArrayIdx(imgArrayIdx - 1);
	return (
		<CSSTransition in={true} appear={true} timeout={2000} classNames="fadeImages">
			<main style={{ ...styles.wrapper, ...styles.flexStyling, flexDirection: 'column' }}>
				<SwitchTransition>
					<CSSTransition
						key={imgArrayIdx}
						appear={true}
						timeout={200}
						addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
						classNames="slideImages"
					>
						<img style={styles.imageWrapper} src={imgArray[imgArrayIdx]} />
					</CSSTransition>
				</SwitchTransition>
				<section style={{ ...styles.btnWrapper, ...styles.flexStyling, flexDirection: 'row' }}>
					<button style={styles.btn} onClick={prevImage}>
						PREV
					</button>

					<button style={styles.btn} onClick={nextImage}>
						NEXT
					</button>
				</section>
			</main>
		</CSSTransition>
	);
};

const styles = {
	wrapper: {
		background: 'grey',
		top: '50%',
		left: '50%',
		position: 'absolute',
		width: '50vw',
		height: '50vh',
		transform: 'translate(-50%,-50%)',
	},
	flexStyling: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	cardWrapper: {
		border: '1px solid black',
	},
	imageWrapper: {
		width: '300px',
		height: '300px',
	},
	btnWrapper: {
		width: '10vw',
		height: '2vh',
		marginTop: '1vh',
	},
	btn: {
		background: 'black',
		color: 'white',
		padding: '0.5vh 1vw',
		outline: 'none',
	},
};
