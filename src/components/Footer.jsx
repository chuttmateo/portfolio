import GithubButton from "./GithubButton";
import GitlabButton from "./GitlabButton";

function Footer() {

    return (
        <div className="flex flex-col items-center gap-1 min-h-14 justify-center sm:flex-row sm:justify-around">
            <div>
                <p>® {currentDate()}</p>
            </div>
            <div className="flex gap-2">
                <GithubButton url="https://github.com/chuttmateo" />
                <GitlabButton url="https://gitlab.com/chuttmateo" />
            </div>
        </div>
    )
}

function currentDate() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    return `${dia}/${mes}/${anio}`
}
export default Footer