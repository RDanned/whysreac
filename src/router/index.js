import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Article from "../components/Article/Article";
import AppLayout from "../components/layout/AppLayout";

// Routing
const router = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Article />
            }
        ]
    },
]);

export default router