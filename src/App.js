import {RouterProvider, Outlet} from "react-router-dom";
import router from "./router";

function App() {
    return (
        <>
            <RouterProvider router={router}>
                <Outlet />
            </RouterProvider>
        </>
    );
}

export default App;
