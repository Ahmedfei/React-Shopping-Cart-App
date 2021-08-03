import React from 'react';

import Product from './Product';


const Products = props => {



return (
		<div className="products-container">
		{props.map(product => (
		<Product key={product.id}product={product}	addItem={props.addItem}/>
		))}
		</div>
		);
		};



export default Products;
