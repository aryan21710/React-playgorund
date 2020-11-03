import React from 'react';
import { InnerWrapper, Heading, Select, Wrapper } from '../StyledComponents/StyledComponents';
import uuid from 'react-uuid';

const View = ({ countryData, onRadioChange }) => {
	return (
		<Wrapper>
			{countryData.map(({ countryName, distance ,countryIndexArr, bikeDataArray }, idx) => (
				<InnerWrapper justifyContent="flex-start" key={uuid()} height="80vh" flexDirection="column">
					<Heading margin="3vh 0vw" fontSize="4rem" color="white">
						{countryName}
                    </Heading>
                    
                    <Heading margin="3vh 0vw" fontSize="2rem" color="white">
						{distance}
					</Heading>
					<Select
						width="20vw"
						name="countryName"
						value={
							countryIndexArr.includes(idx) ? countryData[idx].countryValue : 'Choose A bike to Travel'
						}
						onChange={onRadioChange}
					>
						{!countryIndexArr.includes(idx) && (
							<option key={uuid()} defaultValue="Choose A bike to Travel">
								Choose A bike to Travel
							</option>
						)}
						{bikeDataArray.map((bikeData, bikeidx) => (
							<option key={uuid()} data-countryidx={idx} data-bikeidx={bikeidx} value={bikeData.name}>
								{`${bikeData.name} (maxDistance:- ${bikeData.distance}) (Units:- ${bikeData.totalUnits.current})`}
							</option>
						))}
					</Select>
					<Heading margin="3vh 0vw" fontSize="1.2rem" color="#FAD107">
						{countryIndexArr.includes(idx)
							? `Time Taken:- ${countryData[idx].travelTime}`
							: `Time Taken:- 0`}
					</Heading>
				</InnerWrapper>
			))}
		</Wrapper>
	);
};

export default View;
