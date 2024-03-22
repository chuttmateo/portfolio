import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import CardSkeleton from "./CardSkeleton";

export default function GitHubPrjects() {

    const [proyectos, setProyectos] = useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true)
                const projects = await getProjects();
                setProyectos(projects);
                setLoading(false)
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
                {loading
                    ?
                    proyectos.map(() => {
                        return <CardSkeleton key={Math.random()}/>
                    })
                    :
                    proyectos.map((p) => {
                        return <ProjectCard key={p.id} object={p} />
                    }
                    )
                }
            </div>
        </div>
    )
}
