import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import { Private } from "../components/Private"


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}