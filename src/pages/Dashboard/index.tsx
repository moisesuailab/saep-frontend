import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { useCallback } from "react"
import { useAuth } from "../../shared/hooks/useAuth";

export const Dashboard = () => {
    const auth = useAuth();
    const handleLogout = useCallback(()=> {
        auth.signout()
    }, [])

    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
            <Link to="/">Home</Link>
            <br/>
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}