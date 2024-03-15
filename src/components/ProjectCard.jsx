/* eslint-disable react/prop-types */

import GithubButton from "./GithubButton"

function ProjectCard(props) {
    return (
        <div className="rounded-md max-w-96 bg-gray-800 flex flex-col 
        justify-between gap-1 p-1 items-center">
            <p className="font-bold text-xl">{props.object.name}</p>
            <p>{hasDescription(props.object.description)}</p>
            <p>{hasLanguage(props.object.language)}</p>
            <div className="flex justify-start gap-2 p-1">
                <GithubButton url={props.object.html_url} />
                {hasPage(props.object.homepage)}
            </div>
        </div>
    )
}

function hasDescription(description) {
    if (description === null) {
        return "Este repositorio no tiene descripcion"
    }
    return description;
}

function hasLanguage(language) {
    if (language === null) {
        return ""
    }
    return "Lenguaje: " + language
}

function hasPage(page) {
    if (page === null || page === "") {
        return ""
    }
    return <a href={page} target="_blank" rel="noopener noreferrer" className="w-5 h-5 hover:text-cyan-300">Go</a>
}
export default ProjectCard