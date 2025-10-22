import { createBrowserRouter } from "react-router";
import HomeLayout from "../component/Layout/Homelayout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      {
        path:"/",
        Component:Home,
      

      }
    ]
  },
]);

export default router;