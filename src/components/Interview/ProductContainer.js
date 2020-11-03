import React from 'react';
import { PRODUCTDATA } from './constants';
import { ProductView } from './ProductView';
import { Wrapper } from '../StyledComponents/StyledComponents';
import './styling.css';

export const ProductContainer = () => {

	return (
		<Wrapper>
			<ProductView
				productData={PRODUCTDATA}
			/>
		</Wrapper>
	);
};


/*



export const ProductContainer = () => {
	const [productData, setProductData] = useState(PRODUCTDATA);
	const [totalAmount, setTotalAmount] = useState(0);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		updateProductData();
	}, []);

	const onSearchHandler = () => {
		searchText.length > 0
			? setProductData(productData.filter((data) => data.productName === searchText))
			: setProductData([...PRODUCTDATA]);
	};

	const onChangeHandler = (e) => setSearchText(e.target.value.trim());

	useEffect(() => {
		searchText.length === 0 && setProductData([...PRODUCTDATA]);
	}, [searchText]);

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
		<Wrapper>
			<ProductView
				productData={PRODUCTDATA}
				onChangePriceHandler={onChangePriceHandler}
				onChangeQuantityHandler={onChangeQuantityHandler}
				onChangeHandler={onChangeHandler}
                onSearchHandler={onSearchHandler}
                totalAmount={totalAmount}
                searchText={searchText}
			/>
		</Wrapper>
	);
};

*/