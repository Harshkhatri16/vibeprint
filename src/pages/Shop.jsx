import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Simulate a network delay for better visualization of loading state
                await new Promise(resolve => setTimeout(resolve, 500));

                const simulatedData = [
                    {
                        id: 1,
                        name: 'VibePrint Classic Tee',
                        description: 'A comfortable and stylish tee with a subtle VibePrint logo. Perfect for everyday wear.',
                        price: 24.99,
                        imageUrl: 'https://via.placeholder.com/250x300/F0F0F0/333333?text=Tee+1' // Adjusted size for product cards
                    },
                    {
                        id: 2,
                        name: 'Abstract Art Hoodie',
                        description: 'Unleash your creativity with this unique hoodie featuring a vibrant abstract design.',
                        price: 49.99,
                        imageUrl: 'https://via.placeholder.com/250x300/D0D0D0/333333?text=Hoodie+2'
                    },
                    {
                        id: 3,
                        name: 'Geometric Pattern Shirt',
                        description: 'Step up your style with this modern shirt boasting intricate geometric patterns.',
                        price: 38.50,
                        imageUrl: 'https://via.placeholder.com/250x300/C0C0C0/333333?text=Shirt+3'
                    },
                    {
                        id: 4,
                        name: 'Minimalist Sweatshirt',
                        description: 'Clean lines and premium comfort make this sweatshirt a wardrobe essential.',
                        price: 42.00,
                        imageUrl: 'https://via.placeholder.com/250x300/A0A0A0/333333?text=Sweatshirt+4'
                    },
                    {
                        id: 5,
                        name: 'Urban Joggers',
                        description: 'Designed for comfort and style, these joggers are perfect for an urban lifestyle.',
                        price: 32.75,
                        imageUrl: 'https://via.placeholder.com/250x300/B0B0B0/333333?text=Joggers+5'
                    },
                    {
                        id: 6,
                        name: 'Embroidered Cap',
                        description: 'Add a finishing touch to your outfit with our premium embroidered cap.',
                        price: 18.00,
                        imageUrl: 'https://via.placeholder.com/250x300/909090/333333?text=Cap+6'
                    },
                ];
                setProducts(simulatedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (productId) => {
        console.log(`Product with ID ${productId} added to cart!`);
        // Add your actual cart logic here (e.g., update context, Redux, or call API)
        alert(`Added product ${productId} to cart!`);
    };

    const placeOrder = (productId) => {
        console.log(`Order placed for product with ID ${productId}!`);
        // Add your actual order placement logic here (e.g., navigate to checkout, call API)
        alert(`Ordering product ${productId} now!`);
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <div className="container text-center mt-5">
                    <p className="text-danger fs-4">Error loading products: {error}</p>
                    <p>Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container my-5 text-center">
                {/* Heading styled to resemble your homepage hero text */}
                <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '3.5rem', lineHeight: '1.2', color: '#333' }}>
                    Explore Our Latest Collection
                </h1>
                <p className="lead text-muted mb-5" style={{ fontSize: '1.25rem' }}>
                    Discover unique designs and wearable art tailored for your style.
                </p>

                <div className="row justify-content-center"> {/* Centering the grid */}
                    {products.map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex"> {/* Responsive columns */}
                            <div className="card h-100 shadow-sm border-0"> {/* Added shadow and removed default border */}
                                <img
                                    src={product.imageUrl}
                                    className="card-img-top p-3" // Added padding to image
                                    alt={product.name}
                                    style={{ objectFit: 'cover', height: '250px' }} // Ensure image covers space
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">{product.name}</h5>
                                    <p className="card-text text-muted flex-grow-1 small">{product.description}</p>
                                    <p className="card-text fs-5">
                                        <strong className="text-primary">${product.price.toFixed(2)}</strong>
                                    </p>
                                    <div className="mt-auto d-grid gap-2"> {/* Uses d-grid for full-width buttons */}
                                        <button
                                            className="btn btn-dark btn-lg" // Dark button for "Cart"
                                            onClick={() => addToCart(product.id)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className="btn btn-outline-dark btn-lg" // Outline button for "Order"
                                            onClick={() => placeOrder(product.id)}
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}