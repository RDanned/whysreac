import {createBrowserRouter} from "react-router-dom";
import Article from "../components/Article/Article";
import AppLayout from "../components/layout/AppLayout";

// Routing
const router = createBrowserRouter([
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