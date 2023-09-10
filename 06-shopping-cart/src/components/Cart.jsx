import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import './Cart.css'
import { useCart } from "../hooks/useCart.js";

function CartItem({ thumbnail, title, price, quantity, addToCart, removeToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <button onClick={removeToCart}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart, removeToCart } = useCart();

    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden {...cart.lenght > 0 ? console.log(...cart.lenght) : ""} />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem key={product.id}
                            addToCart={() => addToCart(product)}
                            removeToCart={() => removeToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}