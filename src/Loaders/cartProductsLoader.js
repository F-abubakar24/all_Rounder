import { getStoredCart } from "../Components/Utilities/Local_Storage";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('Products.json');
    const products = await loadedProducts.json()
    // if cart data is in database, you have to use async await
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;
};

export default cartProductsLoader;