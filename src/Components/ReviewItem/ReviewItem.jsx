import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "react";

const ReviewItem = (product) => {
    const { img, name, price, quantity, shipping, id } = product.product;
    return (
        <div className="review_items">
            <img src={img} alt="" />
            <div className="review-details">
                <p className="name">{name}</p>
                <p>
                    Price: <span className="Org_text">${price}</span>
                </p>
                <p>
                    Shipping Charge:{" "}
                    <span className="Org_text">${shipping}</span>
                </p>
                <p>
                    Order Quantity: <span className="Org_text">{quantity}</span>
                </p>
            </div>
            <button onClick={() => product.removeFromCart(id)} className="btn_delete">
                <FontAwesomeIcon className="delete_icon" icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;
