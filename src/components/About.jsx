import React from "react";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-sky-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-left">
                Results-oriented Junior DevOps & Cloud Engineer with a strong technical foundation in Linux Administration and Microsoft Azure. Specialized in streamlining deployment lifecycles through CI/CD pipelines, Containerization (Docker & Kubernetes), and Infrastructure as Code (Terraform & Ansible). Proven ability to automate AWS cloud operations, enhance Cloud Security, and implement Monitoring solutions. Dedicated to improving system reliability and scalability through modern DevOps methodologies and high-performance automation.
            </p>
            <div className="mt-8 flex justify-center gap-8 text-sky-200">
                <div>
                    <span className="block font-bold text-white">Arabic</span> Native
                </div>
                <div>
                    <span className="block font-bold text-white">English</span> B1
                </div>
                <div>
                    <span className="block font-bold text-white">German</span> A2
                </div>
            </div>
        </section>
    );
}
