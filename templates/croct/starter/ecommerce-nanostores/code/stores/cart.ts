import { atom, computed } from 'nanostores';
import { trackCart } from 'croct-nanostores';
import './croct';

type CartItem = {
    productId: string;
    name: string;
    unitPrice: number;
    quantity: number;
};

type CroctCart = {
    items: Array<{
        productId: string;
        name: string;
        unitPrice: number;
        quantity: number;
    }>;
};

export const $cartItems = atom<CartItem[]>([]);

export const $cartTotal = computed($cartItems, items =>
    items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
);

export const $cartCount = computed($cartItems, items =>
    items.reduce((sum, item) => sum + item.quantity, 0),
);

const $croctCart = atom<CroctCart | null>(null);

trackCart($croctCart);

function syncCroctCart(): void {
    const items = $cartItems.get();

    $croctCart.set(
        items.length > 0
            ? {
                  items: items.map(item => ({
                      productId: item.productId,
                      name: item.name,
                      unitPrice: item.unitPrice,
                      quantity: item.quantity,
                  })),
              }
            : null,
    );
}

export function addToCart(item: Omit<CartItem, 'quantity'>): void {
    const items = $cartItems.get();
    const existing = items.find(i => i.productId === item.productId);

    if (existing) {
        $cartItems.set(
            items.map(i =>
                i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i,
            ),
        );
    } else {
        $cartItems.set([...items, { ...item, quantity: 1 }]);
    }

    syncCroctCart();
}

export function removeFromCart(productId: string): void {
    $cartItems.set($cartItems.get().filter(i => i.productId !== productId));
    syncCroctCart();
}

export function updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    $cartItems.set($cartItems.get().map(i => (i.productId === productId ? { ...i, quantity } : i)));
    syncCroctCart();
}
