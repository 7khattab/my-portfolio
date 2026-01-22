import React from "react";

export default function WorkExperience() {
    return (
        <section id="experience" className="py-20 px-4 bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">Professional Experience</h2>
                <div className="space-y-8">

                    {/* Job 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-sky-500 hover:bg-gray-750 transition">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">Network Infrastructure</h3>
                                <p className="text-sky-400 font-semibold">Enter Cloud Company</p>
                            </div>
                            <div className="text-gray-400 text-sm md:text-right">
                                <p>Nov 2025 - Present</p>
                                <p>Cairo, Egypt</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Supporting infrastructure operations and network architecture.</li>
                            <li>Collaborating on system deployments, virtualization setups, and performance optimization.</li>
                            <li>Gaining exposure to automation, scripting, and infrastructure tooling.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-sky-500 hover:bg-gray-750 transition">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">Help Desk Engineer</h3>
                                <p className="text-sky-400 font-semibold">EGPI Company</p>
                            </div>
                            <div className="text-gray-400 text-sm md:text-right">
                                <p>Oct 2025 - Nov 2025</p>
                                <p>Cairo, Egypt</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Resolved daily technical support requests for hardware and software.</li>
                            <li>Managed ticketing, remote troubleshooting, and user onboarding.</li>
                            <li>Supported IT infrastructure maintenance and monitoring tasks.</li>
                        </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-sky-500 hover:bg-gray-750 transition">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">Network Engineer Intern</h3>
                                <p className="text-sky-400 font-semibold">INSTANT Company</p>
                            </div>
                            <div className="text-gray-400 text-sm md:text-right">
                                <p>Aug 2023 - Sep 2023</p>
                                <p>Cairo, Egypt</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Configured and tested networks using Cisco Packet Tracer and EVE-NG.</li>
                            <li>Worked with VLANs, routing, and switching techniques.</li>
                            <li>Performed troubleshooting and basic optimization.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
