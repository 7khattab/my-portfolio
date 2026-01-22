import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-8 text-sky-400">Contact Me</h2>
            <p className="text-gray-300 mb-6">Cairo, Egypt | +201117311063</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <a href="mailto:mohamed5tab3@gmail.com" className="inline-block bg-sky-500 px-8 py-3 rounded text-white font-bold hover:bg-sky-600 transition">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/mohamed-7khattab" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 underline">
                    LinkedIn Profile
                </a>
                <a href="https://github.com/7khattab" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 underline">
                    GitHub Profile
                </a>
            </div>
        </section>
    );
}
