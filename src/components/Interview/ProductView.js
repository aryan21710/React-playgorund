import React from 'react';
import { InnerWrapper, Heading } from './styling';

export const ProductView = ({
	productData,
	onChangeQuantityHandler,
	onChangePriceHandler,
	totalAmount,
	search,
    onChangeHandler,
    onDeleteHandler
}) => {
	return (
		<InnerWrapper flexDirection="column">
			<Heading>GROCERY MINI APP</Heading>
			<InnerWrapper flex="0" height="10vh" flexDirection="row">
				<input className="search" value={search} onChange={onChangeHandler} placeholder="SEARCH" />
			</InnerWrapper>
			<table>
				<thead>
					<tr>
						<th> Product Name </th>
						<th> Quantity </th>
						<th> Product Price </th>
                        <th> Amount </th>
                        <th></th>
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
                                <td><button data-index={idx} onClick={onDeleteHandler}>DELETE</button></td>
							</tr>
						);
					})}

                    {productData.length > 0 && <tr>
						<td className="totalamount" colSpan="3">{'Total Amount'}</td>
						<td className="totalamount">{totalAmount}</td>
					</tr>}
					
				</tbody>
			</table>
		</InnerWrapper>
	);
};
