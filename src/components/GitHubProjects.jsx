import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

export default function GitHubPrjects() {

    const [proyectos, setProyectos] = useState([]);
    useEffect(() => {
        async function fetchProjects() {
            try {
                const projects = await getProjects();
                setProyectos(projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        fetchProjects();
    }, []);

    async function getProjects() {
        const response = await fetch("https://api.github.com/users/chuttmateo/repos?per_page=100");
        const projects = await response.json();
        return projects
    }

    return (
        <div>
            <h2 className="text-xl sm:text-3xl font-extrabold p-4">GitHub Projects</h2>
            <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {proyectos.map((p) => {
                    return <ProjectCard key={p.id} object={p} />
                }
                )}
            </div>
        </div>
    )
}
