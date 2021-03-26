import React from 'react';
import '../ProductList/ProductList.css';


const productList = [
	{
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
		"name": "CHECK PRINT SHIRT",
		"price": 110,
		"description":'The more powerful the customers fantasy of owning the product,'
	},
	{
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "GLORIA HIGH LOGO SNEAKER",
		"price": 91,
		"description":'The more powerful the customers fantasy of owning the product,'
	},
	{
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "CATE RIGID BAG",
		"price": 94.5,
		"description":'The more powerful the customers fantasy of owning the product,'
	},
	{
		"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
		"name": "GUESS CONNECT WATCH",
		"price": 438.9,
		"description":'The more powerful the customers fantasy of owning the product,'
	},
	{
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "'70s RETRO GLAM KEFIAH",
		"price": 20,
		"description":'The more powerful the customers fantasy of owning the product,'
	}
]

function ProductList (){
	return (
		<div className="product-list">
			<h1 className='product-list'>Product List</h1>
		<div className="product-list-container container">
		{
			productList.map((product)=>{
				console.log(product.name)
				return(
					<div className="product-detail-wrapper">
					<div className="Product-details-container">
					<div className="product-image"> <img src={product.imgUrl} alt={product.name}/> </div>
					<div className="product-title">{product.name}</div>
					<div className="product-price">Rs.{product.price}</div>
							<div className="product-description">{product.description}</div>
							<button className="add-to-cart">Add To Cart</button>
					</div>
					</div>
					)
				})
			}
			</div>
			</div>
			)
		}
		export default ProductList;