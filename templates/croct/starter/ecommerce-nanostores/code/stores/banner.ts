import { croctContent } from 'croct-nanostores';
import './croct';

export const announcementBar = croctContent('%announcementBarSlotId%@%announcementBarSlotVersion%', {
    text: 'Free shipping on orders over $50!',
    link: 'https://example.com/products',
    style: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
    },
});

export const heroBanner = croctContent('%heroBannerSlotId%@%heroBannerSlotVersion%', {
    title: 'Welcome to our store',
    subtitle: 'Discover our curated collection of premium products.',
    ctaLabel: 'Shop now',
    ctaLink: 'https://example.com/products',
});
