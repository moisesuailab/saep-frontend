import { Link } from "react-router-dom"
import { Header } from "../../components/Header"

export const Home = () => {
    return (
        <div>
            <Header />
            <h1>Home</h1>

            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}