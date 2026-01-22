import React from "react";

export default function WorkExperience() {
    return (
        <section id="experience" className="py-20 px-4 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">Work Experience</h2>
                <div className="space-y-8">
                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold">DevOps Engineer</h3>
                        <p className="text-sky-300">Company Name | 2023 - Present</p>
                        <p className="mt-2 text-gray-300">Managed cloud infrastructure and CI/CD pipelines.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
