import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Corp from "./pages/Corp/Corp";

import "./App.scss"

const Layout = () => {
    return (
        <div className="app">
            <Outlet />
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