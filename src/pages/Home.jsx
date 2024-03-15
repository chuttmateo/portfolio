import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";
import Header from "../components/Header.jsx"

function Home() {
    const [proyectos, setProyectos] = useState([])
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
        <div className="flex flex-col gap-20">
            <Header/>
            <div className=" flex flex-col justify-center font-sans">
                <h2 className="text-3xl sm:text-7xl font-extrabold">Mateo Chutt</h2>
                <ul className="text-sm flex justify-center gap-10 ">
                    <li>Dev Ops</li>
                    <li>Qa Automation</li>
                    <li>Back Developer</li>
                    <li>Front Developer</li>
                </ul>
            </div>
            <div>
                <h3>Proyectos</h3>
                <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {proyectos.map((p) => {
                        return <ProjectCard key={p.id} object={p} />
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home;