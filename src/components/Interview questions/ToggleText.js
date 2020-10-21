// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from 'react';
export class Message extends React.Component {
	state = {
		toggle: false,
	};

	onClickHandler = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			toggle: !prevState.toggle,
		}));
	};
	render() {
		return (
			<React.Fragment>
				<a onClick={this.onClickHandler} href="#">
					Want to buy a new car?
				</a>
				{this.state.toggle && <p>Call +11 22 33 44 now!</p>}
			</React.Fragment>
		);
	}
}
