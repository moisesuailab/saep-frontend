import { Link } from "react-router-dom"
import { Header } from "../../components/Header"

export const Dashboard = () => {
    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
            <Link to="/">Home</Link>
        </div>
    )
}