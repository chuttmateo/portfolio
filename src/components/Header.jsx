import GithubButton from "./GithubButton"
import GitlabButton from "./GitlabButton"

function Header() {
    return (
        <div className="flex justify-between sticky top-5 ">
            <button className="text-white hover:text-cyan-300">Home</button>
            <div className="flex gap-3">
                <GithubButton url="https://github.com/chuttmateo" />
                <GitlabButton url="https://gitlab.com/chuttmateo" />
            </div>
        </div>
    )
}
export default Header