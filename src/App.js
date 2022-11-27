import { Provider } from "react-redux";
import {RouterProvider, Outlet} from "react-router-dom";
import store from "./store";
import router from "./router";

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}>
                    <Outlet />
                </RouterProvider>
            </Provider>
        </>
    );
}

export default App;
