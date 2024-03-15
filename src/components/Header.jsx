import GithubButton from "./GithubButton"

function Header() {
    return (
        <div className="flex justify-between sticky">
            <button className="text-white hover:text-cyan-300">Home</button>
            <GithubButton url="https://github.com/chuttmateo"/>
        </div>
    )
}
export default Header