import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $cartItems, $cartTotal, $cartCount, removeFromCart, updateQuantity } from '../stores/cart';

export function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const items = useStore($cartItems);
    const total = useStore($cartTotal);
    const count = useStore($cartCount);

    return (
        <>
            <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
                Cart ({count})
            </button>
            {isOpen && (
                <div className="cart-panel">
                    <div className="cart-header">
                        <h2>Shopping Cart</h2>
                        <button className="cart-close" onClick={() => setIsOpen(false)}>
                            &times;
                        </button>
                    </div>
                    {items.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        <>
                            <ul className="cart-items">
                                {items.map(item => (
                                    <li key={item.productId} className="cart-item">
                                        <div className="cart-item-info">
                                            <span className="cart-item-name">{item.name}</span>
                                            <span className="cart-item-price">
                                                ${(item.unitPrice * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="cart-item-actions">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.productId,
                                                        item.quantity - 1,
                                                    )
                                                }
                                            >
                                                &minus;
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.productId,
                                                        item.quantity + 1,
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                            <button
                                                className="cart-item-remove"
                                                onClick={() => removeFromCart(item.productId)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-total">
                                <strong>Total: ${total.toFixed(2)}</strong>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
