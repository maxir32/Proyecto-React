/*import cart from "./assets/carrito1.png";*/
import React from 'react';
import './CartWidget.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CarContext } from '../../context/carContext';

const CartWidget = () => {
    const { car } = useContext(CarContext);
    const { totalQuantity } = useContext(CarContext)

    return (
        <Link to="/cart">
            <img className='cardIcons' src={car} alt="cart-widget"></img>
            { totalQuantity }
        </Link>
    );
}

/*const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}*/

export default CartWidget