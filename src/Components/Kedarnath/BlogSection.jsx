import React from "react";
import "./KedarnathTemplePage.css";

const blogs = [
    { img: "/images/1.jpg", title: "Pilgrim’s Journey", intro: "A first-hand account of the trek up to the sacred shrine.", link: "#" },
    { img: "/images/3.jpg", title: "Packing for the Himalayas", intro: "Essential tips for your Char Dham Yatra.", link: "#" },
    { img: "/images/4.jpg", title: "Festivals of Kedarnath", intro: "Spiritual celebrations that light up the sacred valley.", link: "#" }
];

export default function BlogSection() {
    return (
        <section className="kn-blogs-wrap">
            <h2 className="kn-blogs-title">Blogs & Experiences</h2>
            <div className="kn-blogs-list">
                {blogs.map((b, i) => (
                    <a href={b.link} key={i} className="kn-blog-block fade-in-on-scroll">
                        <img src={b.img} alt={b.title} className="kn-blog-img"/>
                        <div className="kn-blog-body">
                            <div className="kn-blog-title">{b.title}</div>
                            <div className="kn-blog-intro">{b.intro}</div>
                            <span className="kn-blog-read">Read More →</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
