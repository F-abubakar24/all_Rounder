import "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (prop) => {
    const { name, img, seller, price, ratings } = prop.product;
    return (
        <div className="product-card">
            <img src={img} alt={name} className="product-image" />
            <h3 className="product-title">{name}</h3>
            <p className="product-price">${price}</p>
            <div className="product-rating">{ratings} stars</div>
            <p className="product-brand">Brand: {seller}</p>
            <button
                onClick={() => prop.handleAddToCart(prop.product)}
                className="add-to-cart-button"
            >
                Add to Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;
