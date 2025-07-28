import React, { useState } from 'react';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer.jsx';

import Modal from './Modal';
import HeroSection from './HeroSection';
import { blogData } from './blogData';
import './BlogPage.css'; // Imports the styles for the page wrapper and cards

const BlogPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    return (
        <>
            <Navbar/>
            <div className="zenitsu-page-wrapper">
                <HeroSection />

                <main className="zenitsu-card-container">
                    {blogData.map((blog) => (
                        <article key={blog.id} className="zenitsu-card">
                            <h3 className="zenitsu-card__title">{blog.title}</h3>
                            <p className="zenitsu-card__description">{blog.shortDescription}</p>
                            <button className="zenitsu-card__button" onClick={() => openModal(blog)}>
                                Read More
                            </button>
                        </article>
                    ))}
                </main>
            </div>

            {isModalOpen && <Modal blog={selectedBlog} onClose={closeModal} />}
            <Footer/>

        </>
    );
};

export default BlogPage;