import React from "react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 px-4 bg-gray-800 text-center">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-sky-400">Certifications</h2>
                    <div className="flex flex-col gap-4 text-gray-300 text-left pl-4 border-l-2 border-sky-500">
                        <p>AWS Solutions Architect (from NTI)</p>
                        <p>Microsoft Azure: AZ-900, AZ-104, AZ-700, AZ-500, AZ-800 (from NTI)</p>
                        <p>Linux Administration (NTI I & II)</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-sky-400">Education</h2>
                    <div className="flex flex-col gap-4 text-gray-300 text-left pl-4 border-l-2 border-sky-500">
                        <p className="font-bold text-white">B.Sc. in Computer Science & Informatics</p>
                        <p>Tanta University</p>
                        <p className="text-sm text-sky-400">Oct 2019 - Aug 2024</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
