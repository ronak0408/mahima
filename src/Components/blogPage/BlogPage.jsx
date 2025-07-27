import React, { useState } from 'react';
import './BlogPage.css';

const BlogCard = ({ title, excerpt, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <section className={`blog-card ${expanded ? 'expanded' : ''}`}>
            <h2 className="blog-title">{title}</h2>
            <p className="blog-excerpt">{excerpt}</p>
            {expanded && <p className="blog-content">{content}</p>}
            <button className="read-more-btn" onClick={toggleExpanded} aria-expanded={expanded} aria-controls="full-content">
                {expanded ? 'Collapse' : 'Read More'}
            </button>
        </section>
    );
};

const BlogPage = ({ blogs }) => {
    // Example default blogs if none supplied
    const defaultBlogs = [
        {
            title: "Embracing Stillness: The Power of Meditation",
            excerpt: `Discover how daily meditation can transform your mind, bring peace, and help you connect with your deepest self. Learn simple tips to start a spiritual meditation practice.`,
            content: `Meditation is the gentle art of clearing the mind and focusing on the present moment. This practice has been used for centuries to cultivate inner peace, reduce stress, and awaken spiritual awareness. Starting your practice can be as simple as setting aside a few minutes each day to sit quietly, breath deeply, and observe your thoughts without judgment.`,
        },
        {
            title: "The Journey Within: Finding Your Spiritual Path",
            excerpt: `Every journey is unique. Explore different spiritual traditions and tools to awaken your inner wisdom, and find what resonates with your soul.`,
            content: `Finding your spiritual path involves curiosity, openness, and self-compassion. Whether through prayer, meditation, nature walks, or study, the important part is to listen deeply to what resonates with your heart and intuition. Trust your journey and embrace the lessons that come with each step.`,
        },
        {
            title: "Gratitude as a Daily Ritual",
            excerpt: `Practicing gratitude shifts your energy and opens your heart. These simple rituals can help you welcome abundance and joy each day.`,
            content: `Start each day by listing three things you are grateful for. This simple habit can reframe your mindset, reduce negativity, and attract positive experiences. Writing down your gratitude daily is a powerful ritual that grounds you in the present and connects you to the abundance around you.`,
        },
    ];

    const data = blogs && blogs.length ? blogs : defaultBlogs;

    return (
        <main className="blog-page">
            <h1 className="page-heading">📚 Our Spiritual Blogs</h1>
            <div className="blog-list">
                {data.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        content={blog.content}
                    />
                ))}
            </div>
        </main>
    );
};

export default BlogPage;
