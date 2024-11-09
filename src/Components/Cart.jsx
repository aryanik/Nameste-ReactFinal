import { forwardRef, useImperativeHandle, useState } from "react";

const Cart = ({cartItem}) => {

   const carts =   JSON.parse(localStorage.getItem('cartItems'))

    const [cart , setCart] = useState([]);

   
    return (
    <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {(carts || []).map((item, index) => (
                    <li key={index}>
                        {item.card.info.name} - {item.card.info.price} <br />
                        <img src={item.imageUrl} alt={item.name} style={{width: "50px"}}/>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Cart;