import React, { useState, useEffect } from 'react';
import { InnerWrapper, Heading } from './styling';
import uuid from 'react-uuid';

export const ProductView = (props) => {
	const [productData, setProductData] = useState(props.productData);
	const [totalAmount, setTotalAmount] = useState(0);
	const [search, setSearch] = useState('');

	useEffect(() => {
		updateProductData();
	}, []);

	const onSearchHandler = () => {
		search.length > 0
			? setProductData(productData.filter((data) => data.productName === search))
			: setProductData([...props.productData]);
	};

	const onChangeHandler = (e) => setSearch(e.target.value.trim());

	useEffect(() => {
		search.length === 0 && setProductData([...props.productData]);
	}, [search]);

	const updateProductData = (newPrice = undefined, productName = '', newQuantity = undefined) => {
		let totalAmount = 0;
		const _ = productData.map((data) => {
			if (data.productName === productName) {
				const newAmount = newPrice && newQuantity ? newPrice * newAmount : undefined;
				const price = newPrice ? newPrice : data.price;
				const quantity = newQuantity ? newQuantity : data.quantity;
				totalAmount += price * quantity;
				return {
					...data,
					quantity: newQuantity > 0 ? newQuantity : data.quantity,
					price: newPrice > 0 ? newPrice : data.price,
					amount: price * quantity,
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
		const newPrice = parseInt(e.target.value.trim());
		const productName = e.target.dataset.productname.trim();
		updateProductData(newPrice, productName, undefined);
	};

	const onChangeQuantityHandler = (e) => {
		e.preventDefault();
		const newQuantity = parseInt(e.target.value.trim());
		const productName = e.target.dataset.productname.trim();
		updateProductData(undefined, productName, newQuantity);
	};

	return (
		<InnerWrapper flexDirection="column">
			<Heading>GROCERY MINI APP</Heading>
			<InnerWrapper flexDirection="column">
				<InnerWrapper flex="0" height="10vh" flexDirection="row" width="70vw">
					<input className="search" value={search} onChange={onChangeHandler} placeholder="SEARCH" />
					<button onClick={onSearchHandler}>+</button>
				</InnerWrapper>
				<table>
					<thead>
						<tr>
							<th> Product Name </th>
							<th> Quantity </th>
							<th> Product Price </th>
							<th> Amount </th>
						</tr>
					</thead>
					<tbody>
						{productData.map((data) => {
							return (
								<tr key={uuid()}>
									<td>{data.productName}</td>
									<td>
										<input
											value={data.quantity}
											name="quantity"
											data-productname={data.productName}
											onChange={onChangeQuantityHandler}
										/>
									</td>
									<td>
										<input
											value={data.price}
											name="price"
											data-productname={data.productName}
											onChange={onChangePriceHandler}
										/>
									</td>
									<td>{data.amount}</td>
								</tr>
							);
						})}

						<tr>
							<td colSpan="3">{'Total Amount'}</td>
							<td>{totalAmount}</td>
						</tr>
					</tbody>
				</table>
			</InnerWrapper>
		</InnerWrapper>
	);
};

/*

export const ProductView = ({
	productData,
	onChangePriceHandler,
	onChangeQuantityHandler,
	onChangeHandler,
	onSearchHandler,
	totalAmount,
	searchText,
}) => {


    */
