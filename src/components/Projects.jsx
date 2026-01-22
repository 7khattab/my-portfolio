import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
    {
        title: "CI/CD Automation with GitHub Actions & AWS EKS",
        description:
            "Implemented full-scale automation pipeline integrating Docker, Maven, and AWS EKS. Automated workflows handle build, test, and deployment for a Java-based app on Kubernetes.",
        image: project1,
        link: "https://github.com/7khattab/java-calculator-eks-pipeline",
        tags: ["GitHub Actions", "Docker", "AWS EKS", "Maven"]
    },
    {
        title: "Full-Stack Node.js App with CI/CD & Ansible",
        description:
            "Deployed a secure multi-user Todo List app using Node.js, MongoDB Atlas, Docker Compose, and Ansible for remote server provisioning. Automated with GitHub Actions and Watchtower.",
        image: project2,
        link: "https://github.com/7khattab/todo-list-nodejs",
        tags: ["Node.js", "Ansible", "Docker", "MongoDB"]
    },
    {
        title: "Kubernetes-based Microservices Deployment",
        description:
            "Deployed two Flask microservices containerized with Docker on AWS EKS. Managed traffic routing via Kubernetes Ingress and AWS Load Balancer with health checks.",
        image: project3,
        link: "https://github.com/7khattab/K8Smicroservice-app",
        tags: ["K8s", "Flask", "AWS LB", "Docker"]
    },
    {
        title: "Multi-Team Kubernetes Architecture",
        description:
            "Implemented a microservices architecture with separate CI/CD pipelines for different teams, focusing on team isolation and resource management in Kubernetes.",
        image: project1, // Using project1 as placeholder for now since no 4th image
        link: "https://github.com/7khattab",
        tags: ["K8s", "Multi-tenancy", "CI/CD"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                            {/* Optional: Display tags/skills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags && project.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-gray-600 text-sky-200 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sky-400 hover:underline mt-auto"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
