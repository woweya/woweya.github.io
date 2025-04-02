import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectPage"
import LoadingInital from "./pages/LoadingInital"
import SkillsPage from "./pages/SkillPage"

function App() {
    const location = useLocation();
    const prevPathRef = useRef(location.pathname);

    // Scroll to top when route changes, but handle special cases
    useEffect(() => {
        const currentPath = location.pathname;
        const prevPath = prevPathRef.current;

        // Don't scroll if navigating from another page to home with intent to scroll to contacts
        const isContactNavigation =
            currentPath === "/home" &&
            prevPath !== "/home" &&
            location.state?.scrollToContacts;

        if (!isContactNavigation) {
            window.scrollTo(0, 0);
        }

        prevPathRef.current = currentPath;
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<LoadingInital />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
        </Routes>
    )
}

export default App