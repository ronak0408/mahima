import React, { useState, useEffect, useRef } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentTempleIndex, setCurrentTempleIndex] = useState(0);
    const [floatingIcons, setFloatingIcons] = useState([]);
    const intervalRef = useRef(null);

    // Temple image URLs - Replace with your actual temple images
    const templeImages = [
        '/images/temples/golden-temple.jpg',
        '/images/temples/kedarnath.jpg',
        '/images/temples/somnath.jpg',
        '/images/temples/tirupati.jpg',
        '/images/temples/vaishno-devi.jpg',
        '/images/temples/meenakshi.jpg'
    ];

    // Spiritual icons for floating animation
    const spiritualIcons = [
        { symbol: '🕉️', name: 'om' },
        { symbol: '🪷', name: 'lotus' },
        { symbol: '☮️', name: 'peace' },
        { symbol: '🧘‍♂️', name: 'meditation' },
        { symbol: '🕯️', name: 'candle' },
        { symbol: '🙏', name: 'namaste' },
        { symbol: '🔱', name: 'trident' },
        { symbol: '⚖️', name: 'dharma' },
        { symbol: '🌸', name: 'flower' },
        { symbol: '🕊️', name: 'dove' },
        { symbol: '🌙', name: 'moon' },
        { symbol: '⭐', name: 'star' },
        { symbol: '🦚', name: 'peacock' },
        { symbol: '🐘', name: 'elephant' }
    ];

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        setIsLoading(true);

        try {
            console.log('Login attempt:', formData);
            await new Promise(resolve => setTimeout(resolve, 2000));
            showNotification('Login successful! Welcome to your spiritual journey', 'success');
        } catch (error) {
            console.error('Login error:', error);
            showNotification('Login failed. Please try again', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    // Show notification
    const showNotification = (message, type) => {
        // You can integrate with a toast library here
        alert(message);
    };

    // Initialize Google Sign-In
    useEffect(() => {
        const initializeGoogleSignIn = () => {
            if (window.google) {
                window.google.accounts.id.initialize({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
                    callback: handleGoogleResponse
                });
            }
        };

        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogleSignIn;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Handle Google Sign-In response
    const handleGoogleResponse = (response) => {
        try {
            const payload = JSON.parse(atob(response.credential.split('.')[1]));
            showNotification(`Welcome ${payload.name}! Divine blessings on your journey`, 'success');
        } catch (error) {
            console.error('Google Sign-In error:', error);
            showNotification('Google Sign-In failed. Please try again', 'error');
        }
    };

    // Handle Google Sign-In button click
    const handleGoogleSignIn = () => {
        if (window.google) {
            window.google.accounts.id.prompt();
        } else {
            showNotification('Google Sign-In is not available. Please try again later', 'error');
        }
    };

    // Temple background slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTempleIndex((prevIndex) =>
                (prevIndex + 1) % templeImages.length
            );
        }, 8000);

        return () => clearInterval(interval);
    }, [templeImages.length]);

    // Floating icons animation
    useEffect(() => {
        const createFloatingIcon = () => {
            const randomIcon = spiritualIcons[Math.floor(Math.random() * spiritualIcons.length)];
            const newIcon = {
                id: Date.now() + Math.random(),
                ...randomIcon,
                left: Math.random() * 90,
                top: Math.random() * 90,
                size: Math.random() * 20 + 15,
                duration: Math.random() * 10 + 15,
                delay: Math.random() * 5
            };

            setFloatingIcons(prev => [...prev, newIcon]);

            setTimeout(() => {
                setFloatingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
            }, newIcon.duration * 1000);
        };

        const interval = setInterval(createFloatingIcon, 3000);

        // Create initial icons
        for (let i = 0; i < 5; i++) {
            setTimeout(createFloatingIcon, i * 1000);
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="spiritual-login-container">
            {/* Temple Background Gallery */}
            <TempleBackground
                images={templeImages}
                currentIndex={currentTempleIndex}
            />

            {/* Floating Spiritual Icons */}
            <FloatingIcons icons={floatingIcons} />

            {/* Sacred Particles */}
            <SacredParticles />

            {/* Main Content */}
            <div className="login-content">
                <div className="login-card">
                    {/* Sacred Header */}
                    <div className="sacred-header">
                        <div className="divine-logo">
                            <div className="temple-icon">🛕</div>
                            <h1 className="sacred-title">Sacred Portal</h1>
                            <div className="spiritual-line"></div>
                        </div>
                        <p className="blessing-text">
                            "The divine light within you illuminates all paths"
                        </p>
                    </div>

                    {/* Sacred Form */}
                    <form className="sacred-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">
                                <span className="label-icon">📧</span>
                                Sacred Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your divine email"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <span className="label-icon">🔐</span>
                                Divine Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your sacred password"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-checkbox">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                />
                                <span className="custom-checkbox"></span>
                                Remember my divine journey
                            </label>
                            <a href="#" className="forgot-link">
                                Lost your sacred path?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="sacred-login-btn"
                            disabled={isLoading}
                        >
                            <span className="btn-icon">🚪</span>
                            {isLoading ? 'Opening Sacred Portal...' : 'Enter Sacred Realm'}
                        </button>
                    </form>

                    {/* Sacred Divider */}
                    <div className="sacred-divider">
                        <div className="divider-line"></div>
                        <span className="divider-text">or continue your journey with</span>
                        <div className="divider-line"></div>
                    </div>

                    {/* Google Sacred Button */}
                    <button
                        className="google-sacred-btn"
                        onClick={handleGoogleSignIn}
                        type="button"
                        disabled={isLoading}
                    >
                        <GoogleIcon />
                        <span>Divine Sign-In with Google</span>
                    </button>

                    {/* Sacred Registration */}
                    <div className="sacred-signup">
                        <p>
                            New to this sacred realm?
                            <a href="#" className="join-link">Begin your spiritual journey</a>
                        </p>
                    </div>
                </div>

                {/* Sacred Footer */}
                <div className="sacred-footer">
                    <p>"May your path be illuminated with divine wisdom"</p>
                    <div className="footer-icons">
                        <span>🙏</span>
                        <span>🕉️</span>
                        <span>🪷</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Temple Background Component
const TempleBackground = ({ images, currentIndex }) => {
    return (
        <div className="temple-background">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`temple-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="temple-overlay"></div>
                </div>
            ))}
            <div className="temple-gradient"></div>
        </div>
    );
};

// Floating Icons Component
const FloatingIcons = ({ icons }) => {
    return (
        <div className="floating-icons-container">
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className={`floating-icon ${icon.name}`}
                    style={{
                        left: `${icon.left}%`,
                        top: `${icon.top}%`,
                        fontSize: `${icon.size}px`,
                        animationDuration: `${icon.duration}s`,
                        animationDelay: `${icon.delay}s`
                    }}
                >
                    {icon.symbol}
                </div>
            ))}
        </div>
    );
};

// Sacred Particles Component
const SacredParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => i);

    return (
        <div className="sacred-particles">
            {particles.map((particle) => (
                <div
                    key={particle}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${Math.random() * 20 + 10}s`
                    }}
                />
            ))}
        </div>
    );
};

// Google Icon Component (same as before)
const GoogleIcon = () => (
    <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
);

export default LoginPage;
