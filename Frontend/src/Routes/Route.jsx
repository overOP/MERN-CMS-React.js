import{createBrowserRouter} from "react-router-dom";
import Mainlayout from "../components/layout/main/Mainlayout";
import Blogs from "../pages/Blogs";
import Readmore from "../pages/Readmore";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Blogs/>
            },
            {
                path: "/readmore/:id",
                element: <Readmore/>
            },
        ]
    }
])

export default router