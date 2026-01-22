import React from "react";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-sky-400">Testimonials</h2>
            <blockquote className="italic text-gray-300 max-w-2xl mx-auto">
                "An exceptional engineer who streamlined our deployment process significantly."
                <footer className="text-sky-300 mt-2 font-not-italic">- Project Manager</footer>
            </blockquote>
        </section>
    );
}
