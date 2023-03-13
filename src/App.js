import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import WorkShop from "./pages/WorkShop/WorkShop";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";

import "./App.scss"
import Tabbar from "./components/Tabbar/Tabbar";

const Layout = () => {
    return (
        <div className="app">
            <Outlet />
            <Tabbar />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/work",
                element: <Work />
            },
            {
                path: "/workshop",
                element: <WorkShop />
            },
            {
                path: "/projects/:id",
                element: <Projects />
            },
            {
                path: "/project/:id",
                element: <Project />
            },
        ]
    }
])

function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
