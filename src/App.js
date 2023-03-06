import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Corp from "./pages/Corp/Corp";
import Project from "./pages/Project/Project";

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
                path: "/Work",
                element: <Work />
            },
            {
                path: "/Corp",
                element: <Corp />
            },
            {
                path: "/Project",
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
