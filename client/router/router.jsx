import { createBrowserRouter } from "react-router-dom";
import Root from "../src/Root.jsx";

const router = createBrowserRouter([
    {path: "*", element: <Root />}
])

export default router;