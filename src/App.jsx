import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Layouts/Home";
import Shop from "./Components/Shop/Shop"
import Orders from "./Components/Orders/Orders"
import cartProductsLoader from "./Loaders/cartProductsLoader";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children:[
                {
                    path: "/",
                    element: <Shop/>
                },
                {
                    path: "/shop",
                    element: <Shop/>
                },
                {
                    path: "orders",
                    element: <Orders />,
                    loader: cartProductsLoader
                }
            ]
        },
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;