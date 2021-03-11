// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from 'react';
const Product = (props) => {
	const { product, onVote } = props;
	const plus = () => {
		// Call props.onVote to increase the vote count for this product
		onVote(product.name, product.votes + 1);
	};
	const minus = () => {
		// Call props.onVote to decrease the vote count for this product
		onVote(product.name, product.votes - 1);
	};

	return (
		<li>
			<span>{product.name}</span> - <span>votes: {product.votes}</span>
			<button onClick={plus}>+</button> <button onClick={minus}>-</button>
		</li>
	);
};

export const GroceryApp = (props) => {
	let [products, setProducts] = React.useState(props.products);
	const onVote = (dir, index) => {
		// Update the products array accordingly ...
		const output = products.map((product) => {
			if (product.name === dir) {
				return {
					name: dir,
					votes: index,
				};
			} else {
				return {
					name: product.name,
					votes: product.votes,
				};
			}
		});

		setProducts(output);
	};

	return (
		<ul>
			{products.map((product) => (
				<Product product={product} onVote={onVote} />
			))}
		</ul>
	);
};
