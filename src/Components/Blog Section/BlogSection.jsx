import React from 'react';
import './BlogSection.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const blogs = [
    {
        id: 1,
        title: 'Sacred Architecture of Ancient Temples',
        description: 'Discover the divine geometry and spiritual significance behind Hindu temple architecture, from Vastu Shastra principles to cosmic symbolism.',
        slug: 'sacred-architecture-ancient-temples',
    },
    {
        id: 2,
        title: 'Char Dham Yatra: The Ultimate Pilgrimage',
        description: 'Explore the spiritual journey of Char Dham - Badrinath, Dwarka, Puri, and Rameswaram, and their significance in Hindu tradition.',
        slug: 'char-dham-yatra-ultimate-pilgrimage',
    },
    {
        id: 3,
        title: 'Festival Celebrations Across Sacred Sites',
        description: 'Experience the vibrant celebrations of major Hindu festivals at different temples and their cultural importance.',
        slug: 'festival-celebrations-sacred-sites',
    },
    {
        id: 4,
        title: 'Mantras and Their Spiritual Power',
        description: 'Understand the ancient science of mantras, their pronunciation, meanings, and transformative effects on mind and soul.',
        slug: 'mantras-spiritual-power',
    },
    {
        id: 5,
        title: 'Temple Rituals and Their Significance',
        description: 'Learn about daily temple rituals, puja procedures, and the spiritual science behind Hindu worship practices.',
        slug: 'temple-rituals-significance',
    },
    {
        id: 6,
        title: 'Meditation Practices in Sacred Spaces',
        description: 'Explore traditional meditation techniques practiced in temples and their role in spiritual awakening.',
        slug: 'meditation-practices-sacred-spaces',
    },
    {
        id: 7,
        title: 'Divine Stories Behind Temple Deities',
        description: 'Discover the fascinating legends, stories, and historical significance of various temple deities across India.',
        slug: 'divine-stories-temple-deities',
    },
    {
        id: 8,
        title: 'Ayurveda and Spiritual Healing',
        description: 'Uncover the connection between Ayurvedic principles and spiritual healing practices in ancient Indian tradition.',
        slug: 'ayurveda-spiritual-healing',
    }];

const BlogPage = () => (
    <div className="spiritual-static-bg">
        <Navbar></Navbar>
        <div className="blogs-section">
            <header className="header-section">
                <span className="om-symbol">ॐ</span>
                <h1 className="main-title">
                    Spiritual <span className="highlighted">Blog Library</span>
                </h1>

                <p className="subtitle">Bright teachings from the sacred traditions of India</p>
            </header>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <div className="book-shape">
                            <div className="book-icon">📖</div>
                            <div className="blog-title">{blog.title}</div>
                            <p className="blog-desc">{blog.description}</p>
                            <a href={`/blog/${blog.slug}`} className="learn-more-btn">
                                Learn More →
                            </a>
                            <div className="smoke"></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="explore-blogs-section">
                <a href="/blogs" className="explore-blogs-btn">Explore All Blogs 🪔</a>
            </div>
        </div>
           <Footer></Footer>

    </div>
);

export default BlogPage;


