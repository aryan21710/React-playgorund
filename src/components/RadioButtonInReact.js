import React, { useState, useEffect } from 'react';
import { Wrapper, InnerWrapper, Label } from './StyledComponents/StyledComponents';

export const RadioButtonInReact = () => {
	const [val, setVal] = useState('');
	const dummy = ['Aryan', 'Sim', 'Ryan'];

	useEffect(() => {
		val.length > 0 &&
			setTimeout(() => {
				alert(val);
			}, 400);
	}, [val]);

	const onRadioChange = (e) => {
		setVal(e.target.value);
	};
	return (
		<Wrapper>
			<InnerWrapper flexDirection="column">
				{dummy.map((_, idx) => (
					<InnerWrapper key={idx} justifyContent="flex-start" height="4vh" flexDirection="row">
						<input onChange={onRadioChange} type="radio" value={_} id={`rad${idx}`} name="radioGroup" />
						<Label htmlFor={`rad${idx}`}> {_}</Label>
					</InnerWrapper>
				))}
			</InnerWrapper>
		</Wrapper>
	);
};
