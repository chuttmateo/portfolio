import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import GitHubProjects from "../components/GitHubProjects.jsx";
import Profile from "../components/Profile.jsx";

function Home() {
    return (
        <div className="flex flex-col gap-20 max-w-screen-xl mt-0 mb-0 ml-auto mr-auto pl-8 pr-8 text-center">
            <Header />
            <Profile />
            <GitHubProjects />
            <Footer />
        </div>
    )
}
export default Home;