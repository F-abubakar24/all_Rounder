import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToBrowserDB } from "../Utlities/Local_Storage";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToBrowserDB(product.id)
    };

    return (
        <div className="shopWrapper">
            <div className="shop_container">
                <div className="products_container">
                    <div className="product_container">
                        {products.map((product) => (
                            <Product
                                handleAddToCart={handleAddToCart}
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                <div className="cart_container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;
