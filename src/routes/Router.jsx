import { createBrowserRouter } from "react-router";
import HomeLayout from "../component/Layout/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout
  },
]);

export default router;