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
    background: black;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	@media (max-width: 768px) {
		flex-direction: column;
		height: 80vh;
	}
`;


export const Label=styled.label`
    margin-left: 0.5vw;
    color: black;
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


export const Select = styled.select`
	margin: 1.5vh 0 5vh 0;
	border-radius: 20px;
	padding: 0.5vh 2vw;
	background: white;
	outline: none;
	display: block;
	width: ${props=>props.width};
	font-size: 0.8rem;
	font-family: sans-serif;
	color: black;
	line-height: 1;
	box-sizing: border-box;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
`;
