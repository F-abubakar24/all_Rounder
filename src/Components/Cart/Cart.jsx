import "react";
import "./Cart.css"

const Cart = (data) => {
    const { cart } = data;
    // console.log(cart)

    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shipping + tax;

    return (
        <div className="card_raper">
            <h4>Order Summary</h4>
            <p>Selected Items: {data.cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
