import "react";
import "./Cart.css"

const Cart = (data) => {
    const { cart } = data;
    // console.log(cart[0])

    let totalPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
    }


    return (
        <div className="card_raper">
            <h4>Order Summary</h4>
            <p>Selected Items: {data.cart.length}</p>
            <p>Total Price: { }</p>
            <p>Total Shipping: { }</p>
            <p>Tax: { }</p>
            <h5>Grand Total: { }</h5>
        </div>
    );
};

export default Cart;
