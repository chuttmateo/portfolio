import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import CardSkeleton from "./CardSkeleton";
import { getProjects } from "../services/github-api";

export default function GitHubProjects() {
  const [proyectos, setProyectos] = useState(Array(12).fill({}));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    setProyectos(await getProjects());
    setLoading(false);
  }

  return (
    <div>
      <h2 className="text-xl sm:text-3xl font-extrabold p-4">
        GitHub Projects
      </h2>
      <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {loading
          ? proyectos.map((_, index) => {
              return <CardSkeleton key={index} />;
            })
          : proyectos.map((p) => {
              return <ProjectCard key={p.id} object={p} />;
            })}
      </div>
    </div>
  );
}
