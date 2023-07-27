import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToBrowserDB, getStoredCart } from "../Utilities/Local_Storage";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            
            if (addedProduct) {
                // step 3: add quantity
                addedProduct.quantity = storedCart[id];
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]; 
        }
        setCart(newCart);
        addToBrowserDB(selectedProduct.id);
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
