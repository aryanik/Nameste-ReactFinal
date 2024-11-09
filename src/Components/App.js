
import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
import Cart from './Cart.jsx';


const AppLayout = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };
    return(
        <div className="app">

        <Header />
        <Outlet context={{ cartItems, addItemToCart }} />
    </div>
    ) 
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },

            {
                path: "/about",
                element: <About />,
            },
        
            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },

            {
                path:"/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error/>
    },

   

])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
