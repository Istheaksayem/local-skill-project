import { createBrowserRouter } from "react-router";
import HomeLayout from "../component/Layout/Homelayout";


import SkillDetails from "../Pages/SkillDetails";

import Root from "../Pages/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        path:"/",
        Component:HomeLayout,
     
        },
        {
          path:"/auth/login",
          Component:Login
     
          
        },
        {
          path:"/auth/register",
          Component:Register

        },
        {
          path:"/skill-details/:id",
          Component:SkillDetails,

          loader: () =>fetch("/skillData.json")
        }
    ]
  },
]);

export default router;