import { useParams } from "react-router-dom";

const Product = () => {
	let { id } = useParams();

	return (
		<main>
			{ id }
			{/* <div>
				<img src={image} alt={title} />
			</div> */}
			{/* <div>
				<h1>{title}</h1>
				<p>{price}</p>
				<p>{description}</p>
				<div>
					<button>0</button>
					<button>Add to cart</button>
				</div>
			</div> */}
		</main>
	);
};

export default Product;
