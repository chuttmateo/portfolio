/* eslint-disable react/prop-types */

import GithubButton from "./GithubButton"

function ProjectCard(props) {
    return (
        <div className=" bg-card-color text-description-color rounded-lg max-w-96 dark:bg-dark-card-color flex flex-col 
        justify-between gap-1 p-6 items-center">
            <p className="text-title-color dark:text-dark-text-color font-bold text-xl">{props.object.name}</p>
            <p>{hasDescription(props.object.description)}</p>
            <p>{hasLanguage(props.object.language)}</p>
            <div className="flex justify-start gap-2">
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

    return (
        <a href={page} target="_blank" rel="noopener noreferrer" className="w-5 h-5 hover:text-cyan-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
        </a>
    )
}
export default ProjectCard