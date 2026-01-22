import React from "react";
import heroImg from "../assets/hero_real.png";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-800 to-gray-900">
            <img
                src={heroImg}
                alt="Mohamed Khattab"
                className="rounded-full w-40 h-40 mb-6 border-4 border-sky-500 object-cover"
            />
            <h1 className="text-4xl font-bold mb-2">Mohamed Khattab</h1>
            <h2 className="text-xl text-sky-400 mb-4">DevOps Engineer & Cloud Computing Engineer</h2>
            <p className="max-w-xl mb-6">
                Specialized in CI/CD, Containerization, and Infrastructure as Code for scalable, secure systems.
            </p>
            <div className="flex justify-center gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-sky-500 rounded hover:bg-sky-600 transition"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-sky-500 rounded hover:bg-sky-500 hover:text-gray-900 transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}
