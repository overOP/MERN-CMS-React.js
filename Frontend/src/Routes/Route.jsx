import{createBrowserRouter} from "react-router-dom";
import Mainlayout from "../components/layout/main/Mainlayout";
import Blogs from "../pages/Blogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Blogs/>
            },
        ]
    }
])

export default router