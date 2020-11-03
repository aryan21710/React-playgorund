export const PRODUCTDATA = [
	{
		productName: 'apple',
		price: 10,
		unit: 'per piece',
		quantity: 1,
		amount: 0,

	},
	{
		productName: 'banana',
		price: 20,
		unit: 'per dozen',
		amount: 0,
		quantity: 2,

	},
	{
		productName: 'lemon',
		price: 3,
		unit: 'per piece',
		amount: 0,
		quantity: 3,

	},
	{
		productName: 'grapes',
		price: 50,
		unit: 'per kg',
		amount: 0,
		quantity: 4,
	},
];


export const UPDATEDPRODUCTDATA=PRODUCTDATA.map((data) => ({
	...data,
	amount: data.price * data.quantity,
}))