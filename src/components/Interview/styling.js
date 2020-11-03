import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
	display: flex;
    justify-content: center;
    align-items: center;
	opacity: 1;
    z-index: 2;
    background: grey;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	@media (max-width: 768px) {
		flex-direction: column;
		height: 80vh;
	}
`;



export const Heading = styled.h1`
	font-size: ${(props) => props.fontSize || '1.8rem'};
	color: ${(props) => props.color || 'white'};
	text-align: center;
	font-family: ${(props) => props.fontFamily || 'Nasalisation'};
	z-index: 1000;
	font-weight: 100;
	margin: ${props=>props.margin || "2.5px auto"};
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const InnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: ${(props) => props.alignItems || 'center'};
	justify-content: ${(props) => props.justifyContent || 'center'};
	flex-direction: ${(props) => props.flexDirection || 'row'};
	height: ${(props) => props.height || '75vh'};
	width: ${(props) => props.width || '25vw'};
	flex: ${(props) => props.flex || '1'};
    flex-wrap: ${props=>props.flexWrap};
	z-index: 2;
	@media (max-width: 768px) {
		width: 100vw;
		height: 30vh;
	}
`






