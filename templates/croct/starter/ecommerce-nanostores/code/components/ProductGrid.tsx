import { useStore } from '@nanostores/react';
import { recommendedProducts } from '../stores/products';
import { addToCart } from '../stores/cart';

export function ProductGrid() {
    const { content } = useStore(recommendedProducts);

    return (
        <section className="product-section">
            {content.title && <h2 className="section-title">{content.title}</h2>}
            {content.description && <p className="section-description">{content.description}</p>}
            <div className="product-grid">
                {content.cards.map((card, index) => (
                    <div key={index} className="product-card">
                        {card.image && (
                            <img src={card.image} alt={card.name} className="product-image" />
                        )}
                        <div className="product-info">
                            <h3 className="product-name">{card.name}</h3>
                            {card.description && (
                                <p className="product-description">{card.description}</p>
                            )}
                            <p className="product-price">${card.price.toFixed(2)}</p>
                            {card.cta && (
                                <button
                                    className="product-cta"
                                    onClick={() =>
                                        addToCart({
                                            productId: card.name.toLowerCase().replace(/\s+/g, '-'),
                                            name: card.name,
                                            unitPrice: card.price,
                                        })
                                    }
                                >
                                    {card.cta.label}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
