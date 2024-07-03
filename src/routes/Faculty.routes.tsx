import About from "../pages/About";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";


export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashboard></FacultyDashboard>,
    },
    {
        name: 'About',
        path: 'about',
        element: <About></About>
    },
    
];