import React, { useState, useEffect } from 'react';
import View from './View';

const Container = () => {
	const [selectedcountry, setSelectedcountry] = useState({
		countryIndex: -1,
		countryValue: '',
		bikeIndex: -1,
	});

	const { countryIndex, countryValue, bikeIndex } = selectedcountry;
	const [countryData, setcountryData] = useState([]);
	const [leftUnitsAndTravelTime, setLeftUnitsAndTravelTime] = useState(
		Array(4).fill({
			name: '',
			distance: '',
			speed: '',
			travelTime: 0,
			totalUnits: {
				original: -1,
				current: -1,
			},
			error: false,
			countryIndexArr: [],
			bikeIndexArr: [],
		})
	);

	useEffect(() => {
		setcountryData(populatecountryData());
	}, []);

	useEffect(() => {
		if (countryValue.length > 0 && countryIndex > -1 && bikeIndex > -1) {
			updateBikeUnitsAndTravelTime();
		} else {
			setSelectedcountry({
				countryIndex: -1,
				countryValue: '',
				bikeIndex: -1,
			});
		}
	}, [countryValue, countryIndex, bikeIndex]);

	useEffect(() => {
		countryValue.length > 0 && countryIndex > -1 && bikeIndex > -1 && syncBikeUnitsAndTravelTime();
	}, [leftUnitsAndTravelTime]);

	const populatecountryData = () => {
		const filteredArrOfSelectedcountry = [
			{ countryName: 'India', distance: '100', travelTime: 0, countryIndexArr: [], countryIdx: -1 },
			{ countryName: 'Germany', distance: '200', travelTime: 0, countryIndexArr: [], countryIdx: -1 },
			{ countryName: 'Iceland', distance: '300', travelTime: 0, countryIndexArr: [], countryIdx: -1 },
			{ countryName: 'USA', distance: '600', travelTime: 0, countryIndexArr: [], countryIdx: -1 },
		];

		const bikeData = [
			{
				name: 'ducati',
				distance: 200,
				speed: 2,
				travelTime: 0,
				totalUnits: {
					original: 2,
					current: 2,
				},
			},
			{
				name: 'kawasaki',
				distance: 300,
				speed: 4,
				travelTime: 0,
				totalUnits: {
					original: 1,
					current: 1,
				},
			},
			{
				name: 'triumph',
				distance: 400,
				speed: 5,
				travelTime: 0,
				totalUnits: {
					original: 1,
					current: 1,
				},
			},
			{
				name: 'harley',
				distance: 600,
				speed: 10,
				travelTime: 0,
				totalUnits: {
					original: 2,
					current: 2,
				},
			},
		];
		return filteredArrOfSelectedcountry.map((data) => ({
			...data,
			finalStatus: false,
			bikeDataArray: bikeData.map((data) => data),
		}));
	};

	const onRadioChange = (e) => {
		setSelectedcountry({
			countryIndex: parseInt(e.target.options[e.target.selectedIndex].dataset.countryidx),
			countryValue: e.target.value,
			bikeIndex: parseInt(e.target.options[e.target.selectedIndex].dataset.bikeidx),
		});
	};

	const syncBikeUnitsAndTravelTime = () => {
		const updatedcountryData = countryData.map((countryData, idx) => {
			const _ = leftUnitsAndTravelTime.filter((data) => data.countryIndexArr.includes(idx));
			return {
				...countryData,
				countryIndexArr: [...countryData.countryIndexArr, countryIndex],
				countryValue: idx === countryIndex ? countryValue : countryData.countryValue,
				travelTime: _.length > 0 ? _[0].travelTime : countryData.travelTime,
				bikeDataArray: [...leftUnitsAndTravelTime],
				error: idx === countryIndex ? leftUnitsAndTravelTime[bikeIndex].error : countryData.error,
			};
		});
		setcountryData(updatedcountryData);
	};

	const updateBikeUnitsAndTravelTime = () => {
		const countryDistance = countryData[countryIndex].distance;
		const { bikeDataArray } = countryData[countryIndex];
		const bikeMaxDistance = bikeDataArray[bikeIndex].distance;
		const totalUnits = bikeDataArray[bikeIndex].totalUnits;
		const bikeSpeed = bikeDataArray[bikeIndex].speed;
		if (countryDistance <= bikeMaxDistance && totalUnits.current > 0) {
			// leftUnitsAndTravelTime is array of 4. update all array.
			const updatedLeftUnitsAndTravelTime = leftUnitsAndTravelTime.map((data, idx) => {
				if (data.countryIndexArr.includes(countryIndex)) {
					return {
						...bikeDataArray[idx],
						travelTime: 0,
						totalUnits: {
							original: bikeDataArray[idx].totalUnits.original,
							current: !data.countryIndexArr.includes(countryIndex)
								? bikeDataArray[idx].totalUnits.current
								: bikeDataArray[idx].totalUnits.current + 1 <= bikeDataArray[idx].totalUnits.original
								? bikeDataArray[idx].totalUnits.current + 1
								: bikeDataArray[idx].totalUnits.current,
						},
						countryIndexArr: data.countryIndexArr.includes(countryIndex)
							? [countryIndex]
							: [...data.countryIndexArr, countryIndex],
						bikeIndexArr: [],
						error: true,
					};
				} else {
					if (idx === bikeIndex) {
						// 1st new entry is added below
						return {
							...bikeDataArray[idx],
							travelTime: Math.round(countryData[countryIndex].distance / parseInt(bikeSpeed)),
							totalUnits: {
								original: totalUnits.original,
								current: totalUnits.current - 1,
							},
							countryIndexArr: data.countryIndexArr.includes(countryIndex)
								? [countryIndex]
								: [...data.countryIndexArr, countryIndex],
							bikeIndexArr: [bikeIndex],
							error: false,
						};
					} else {
						// all old entry is overwritten
						return {
							...bikeDataArray[idx],
							travelTime: 0,
							totalUnits: {
								original: bikeDataArray[idx].totalUnits.original,
								current: data.countryIndexArr.includes(countryIndex)
									? bikeDataArray[idx].totalUnits.current + 1
									: bikeDataArray[idx].totalUnits.current,
							},
							countryIndexArr: data.countryIndexArr.includes(countryIndex)
								? [countryIndex]
								: [...data.countryIndexArr],
							bikeIndexArr: [],
							error: false,
						};
					}
				}
			});
			console.log(`updatedLeftUnitsAndTravelTime ${countryIndex} :: ${countryValue} :: ${bikeIndex}`);

			console.log(`updatedLeftUnitsAndTravelTime ${JSON.stringify(updatedLeftUnitsAndTravelTime, null, 4)}`);
			setLeftUnitsAndTravelTime([...updatedLeftUnitsAndTravelTime]);
		}
	};

	return (
		<React.Fragment>
			<View countryData={countryData} onRadioChange={onRadioChange} />
		</React.Fragment>
	);
};

export default Container;
