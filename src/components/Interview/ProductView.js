import React from 'react';
import { InnerWrapper, Heading } from './styling';

export const ProductView = ({
	productData,
	onChangeQuantityHandler,
	onChangePriceHandler,
	totalAmount,
	search,
	onChangeHandler,
}) => {
	return (
		<InnerWrapper flexDirection="column">
			<Heading>GROCERY MINI APP</Heading>
			<InnerWrapper flex="0" height="10vh" flexDirection="row" width="70vw">
				<input className="search" value={search} onChange={onChangeHandler} placeholder="SEARCH" />
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
					{productData.map((data, idx) => {
						return (
							<tr key={idx}>
								<td>{data.productName}</td>
								<td>
									<input
										value={data.quantity}
										name="quantity"
										name={data.productName}
										data-index={idx}
										onChange={onChangeQuantityHandler}
									/>
								</td>
								<td>
									<input
										value={data.price}
										name="price"
										name={data.productName}
										data-index={idx}
										onChange={onChangePriceHandler}
									/>
								</td>
								<td>{data.amount}</td>
							</tr>
						);
					})}

                    {productData.length===4 && <tr>
						<td colSpan="3">{'Total Amount'}</td>
						<td>{totalAmount}</td>
					</tr>}
					
				</tbody>
			</table>
		</InnerWrapper>
	);
};
