import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../home/Homepage";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Homepage></Homepage>

        }
    ]
    }
])

export default MainRoutes;