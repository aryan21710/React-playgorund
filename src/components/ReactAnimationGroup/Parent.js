import React, { useState, useEffect } from 'react';
import sfo from '../../images/sfo.jpg';
import apple from '../../images/apple_raw.png';
import justice from '../../images/justice.jpg';
import fbIcon from '../../images/fbIcon.png';

export const Parent = () => {
	const [imgArray, setImgArray] = useState([sfo, apple, justice, fbIcon]);
	const [imgArrayIdx, setImgArrayIdx] = useState(0);
	const nextImage = () => imgArrayIdx < imgArray.length - 1 && setImgArrayIdx(imgArrayIdx + 1);
	const prevImage = () => imgArrayIdx > 0 && setImgArrayIdx(imgArrayIdx - 1);

	return (
		<main style={{ ...styles.wrapper, ...styles.flexStyling, flexDirection: 'column' }}>
			<section style={{ ...styles.cardWrapper }}>
				<img style={styles.imageWrapper} src={imgArray[imgArrayIdx]} />
			</section>
			<section style={{ ...styles.btnWrapper, ...styles.flexStyling, flexDirection: 'row' }}>
				<button style={styles.btn} onClick={prevImage}>
					PREV
				</button>

				<button style={styles.btn} onClick={nextImage}>
					NEXT
				</button>
			</section>
		</main>
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
	btnWrapper: {
		width: '10vw',
		height: '2vh',
		marginTop: '1vh',
	},
	cardWrapper: {
		border: '1px solid black',
	},
	imageWrapper: {
		width: '300px',
		height: '300px',
		objectFit: 'fill',
	},
	btn: {
		background: 'black',
		color: 'white',
		padding: '0.5vh 1vw',
		outline: 'none',
	},
};
