import "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css"
import { useState } from "react";
import { removeFromDB } from "../Utilities/Local_Storage";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    // Remove from cart
    const removeFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDB(id)
    }

    // counting total products
    let cartQuantity = 0;
    for (const qt of savedCart) {
        cartQuantity = cartQuantity + qt.quantity;
    }

    return (
        <div className="shopWrapper">
            <div className="shop_container review_item_container">
                <div className="review_cart">
                    {cart.map((product) => (
                        <ReviewItem removeFromCart={removeFromCart} key={product.id} product={product} />
                    ))}
                </div>
                <div className="cart_container">
                    <Cart cart={cart} /> 
                </div>
            </div>
        </div>
    );
};

export default Orders;
