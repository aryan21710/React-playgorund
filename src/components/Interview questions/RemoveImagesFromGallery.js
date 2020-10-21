import React from 'react';

export class ImageGallery extends React.Component {
	state = {
		imageArray: this.props.links,
	};
	removeImage(remImgIdx) {
		console.log(`remImgIdx ${remImgIdx}`);
		this.setState(
			{
				imageArray: this.state.imageArray.filter((image, idx) => idx !== remImgIdx),
			},
			() => {
				console.log(`imageArray ${this.state.imageArray}`);
			}
		);
	}
	render() {
		const { imageArray } = this.state;
		return (
			<div className="wrapper">
				{imageArray.map((_, idx) => {
					return (
						<div key={idx} className="image">
							<img src={require(`../../images/${_}`)} />
							<button className="remove" onClick={() => this.removeImage(idx)}>
								X
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}
