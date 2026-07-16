import { croctContent } from 'croct-nanostores';
import './croct';

export const recommendedProducts = croctContent('%productsSlotId%@%productsSlotVersion%', {
    title: 'Recommended for you',
    description: 'Handpicked products based on your preferences.',
    cards: [
        {
            name: 'Classic T-Shirt',
            description: 'Premium cotton comfort for everyday wear.',
            price: 29.99,
            cta: {
                label: 'Add to cart',
                link: 'https://example.com/products/classic-t-shirt',
            },
        },
        {
            name: 'Running Shoes',
            description: 'Lightweight performance for every run.',
            price: 89.99,
            cta: {
                label: 'Add to cart',
                link: 'https://example.com/products/running-shoes',
            },
        },
        {
            name: 'Leather Backpack',
            description: 'Durable everyday carry with timeless style.',
            price: 129.99,
            cta: {
                label: 'Add to cart',
                link: 'https://example.com/products/leather-backpack',
            },
        },
    ],
});
