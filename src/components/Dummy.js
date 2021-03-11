import React from 'react';
import multi from '../public/multi.jpeg';
import sfo from '../images/sfo.jpg';
import './dummy.css';

export const Dummy = () => {
	return (
		<div style={styles.bkgContainer}>
			<div style={styles.outerContainer}>
				<div style={{ ...styles.innerContainer, background: 'yellow' }}>
					<img src={`${multi}`} style={styles.image} />
				</div>
				<div style={styles.backgroundContainer} />
                <div style={{ ...styles.innerContainer, background: 'pink' }}>
                    <h1>heading</h1>
                    <p>p1</p>
                    <p>p2</p>
                </div>
			</div>
		</div>
	);
};

const styles = {
	outerContainer: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgound: 'rgba(0,0,0)',
	},
	bkgContainer: {
		width: '100vw',
		height: '100vh',
		backgroundImage: `url(${sfo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	innerContainer: {
		flex: 1,
        height: '25vh',
        display: 'flex',
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundContainer: {
		backgroundImage: `url(${sfo})`,
		backgroundRepeat: 'no-repeat',
		flex: 1,
		height: '25vh',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	image: {
		src: `url(${multi})`,
		position: 'cover',
		height: '25vh',
		width: '100%',
	},
};
