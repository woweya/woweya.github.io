import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectPage"
import LoadingInital from "./pages/LoadingInital"

function App() {
    const location = useLocation();

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<LoadingInital />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    )
}

export default App

