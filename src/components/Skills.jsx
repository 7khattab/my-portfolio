import React from "react";

const skills = [
    "AWS", "Azure", "Terraform", "Ansible", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Python", "Bash", "Linux", "Windows Server", "Git", "TCP/IP"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-sky-400">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map(skill => (
                    <span key={skill} className="bg-gray-700 text-sky-300 px-4 py-2 rounded-full font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
