import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroBanner } from './components/HeroBanner';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';

export function App() {
    return (
        <div className="app">
            <AnnouncementBar />
            <header className="header">
                <div className="header-content">
                    <a href="/" className="logo">
                        Store
                    </a>
                    <nav className="nav">
                        <a href="#">Products</a>
                        <a href="#">Categories</a>
                        <a href="#">About</a>
                    </nav>
                    <Cart />
                </div>
            </header>
            <main>
                <HeroBanner />
                <ProductGrid />
            </main>
            <footer className="footer">
                <p>
                    Powered by{' '}
                    <a href="https://croct.com" target="_blank" rel="noopener noreferrer">
                        Croct
                    </a>{' '}
                    &amp;{' '}
                    <a
                        href="https://croct-nano.fryuni.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nanostores
                    </a>
                </p>
            </footer>
        </div>
    );
}
