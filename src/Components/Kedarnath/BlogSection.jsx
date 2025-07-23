import React from "react";
import "./KedarnathTemplePage.css";

const blogs = [
    {
        title: "Pilgrimage to the Abode of Shiva",
        intro: "An emotional retelling of a devotee’s trek to Kedarnath, describing trials and spiritual elation.",
        link: "#"
    },
    {
        title: "Preparing for Kedarnath Yatra: Practical & Spiritual Guide",
        intro: "Tips on packing for the trek and preparing your spirit for the divine journey.",
        link: "#"
    },
    {
        title: "Festivals & Sacred Rituals of Kedarnath",
        intro: "Explore the sacred festivals celebrated at Kedarnath temple throughout the year.",
        link: "#"
    },
];

export default function BlogSection() {
    return (
        <section className="kt-blogs-section fade-on-scroll">
            <h2 className="kt-blogs-heading spiritual-heading">Blogs & Experiences</h2>
            <hr className="kt-hr-motif" />
            <div className="kt-blog-list">
                {blogs.map((blog, idx) => (
                    <a href={blog.link} key={idx} className="kt-blog-card" aria-label={blog.title}>
                        <h3 className="kt-blog-title">{blog.title}</h3>
                        <p className="kt-blog-intro">{blog.intro}</p>
                        <span className="kt-blog-read">Read More &rarr;</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
