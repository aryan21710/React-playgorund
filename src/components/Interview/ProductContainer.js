import React, { useState, useEffect, useCallback } from 'react';
import { UPDATEDPRODUCTDATA } from './constants';
import { ProductView } from './ProductView';
import { Wrapper } from '../StyledComponents/StyledComponents';
import './styling.css';
import lodash from 'lodash';

const _ = lodash;

export const ProductContainer = () => {
	const [productData, setProductData] = useState(UPDATEDPRODUCTDATA);
	const [totalAmount, setTotalAmount] = useState(() => {
		let totalAmount = 0;
		UPDATEDPRODUCTDATA.forEach((data) => {
			totalAmount += data.price * data.quantity;
		});
		return totalAmount;
	});
	const [search, setSearch] = useState('');

	const onChangeHandler = (e) => setSearch(e.target.value.trim());

	const filterDataBySearchedText = () => {
		console.log(`filteredProductData`);
		if (search.length > 0) {
			const regexPattern = new RegExp(search, 'g');
			const filteredProductData = productData.filter((data) => data.productName.match(regexPattern));
			console.log(`filteredProductData ${JSON.stringify(filteredProductData, null, 4)}`);
			filteredProductData.length === 0 ? setProductData(UPDATEDPRODUCTDATA) : setProductData(filteredProductData);
		} else {
			setProductData(UPDATEDPRODUCTDATA);
		}
	};

	const debouncedSearch = useCallback(_.debounce(filterDataBySearchedText, 1000));

	useEffect(() => {
		debouncedSearch();
	}, [search]);

	const updateProductPrice = (newPrice, index) => {
		console.log(`updateProductData ${newPrice}`);
		let totalAmount = 0;
		const _ = productData.map((data, idx) => {
			if (index === idx) {
				totalAmount += newPrice * data.quantity;
				return {
					...data,
					price: newPrice,
					amount: newPrice * data.quantity,
				};
			} else {
				totalAmount += data.price * data.quantity;
				return { ...data, amount: data.price * data.quantity };
			}
		});
		setProductData(_);
		setTotalAmount(totalAmount);
	};

	const updateProductQuantity = (newQuantity, index) => {
		console.log(`updateProductData ${newQuantity}`);
		let totalAmount = 0;
		const _ = productData.map((data, idx) => {
			if (index === idx) {
				totalAmount += data.price * newQuantity;
				return {
					...data,
					quantity: newQuantity,
					amount: data.price * newQuantity,
				};
			} else {
				totalAmount += data.price * data.quantity;
				return { ...data, amount: data.price * data.quantity };
			}
		});
		setProductData(_);
		setTotalAmount(totalAmount);
	};

	const onChangePriceHandler = (e) => {
		e.preventDefault();
		const newPrice = isNaN(parseInt(e.target.value.trim())) ? 0 : parseInt(e.target.value.trim());
		const index = parseInt(e.target.dataset.index);
		updateProductPrice(newPrice, index);
	};

	const onChangeQuantityHandler = (e) => {
		e.preventDefault();
		const newQuantity = isNaN(parseInt(e.target.value.trim())) ? 0 : parseInt(e.target.value.trim());
		const index = parseInt(e.target.dataset.index);
		updateProductQuantity(newQuantity, index);
	};

	const onDeleteHandler = (e) => {
		const index = parseInt(e.target.dataset.index);
		let totalAmount = 0;
		const filteredProductData = productData.filter((data, idx) => idx !== index);
		filteredProductData.forEach((data) => {
			totalAmount += data.price * data.quantity;
		});
		setTotalAmount(totalAmount);
		setProductData([...filteredProductData]);
	};

	return (
		<Wrapper>
			<ProductView
				productData={productData}
				setProductData={setProductData}
				onChangePriceHandler={onChangePriceHandler}
				onChangeQuantityHandler={onChangeQuantityHandler}
				totalAmount={totalAmount}
				onChangeHandler={onChangeHandler}
				search={search}
				onDeleteHandler={onDeleteHandler}
			/>
		</Wrapper>
	);
};
