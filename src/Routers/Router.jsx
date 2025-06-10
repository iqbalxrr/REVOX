import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";
import SigninPage from "../Pages/SigninPage";
import AddServicePage from "../Pages/AddServicePage";
import AllServicePage from "../Pages/AllServicePage";
import DetailsPage from "../Pages/DetailsPage";

export const router = createBrowserRouter([
      
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
               index: true,
               Component: HomePage 
            },
            {
                path: "/signup",
                Component: SignupPage
            },
            {
                path: "/signin",
                Component: SigninPage
            },
            {
                path: "/addservice",
                Component:AddServicePage
            },
            {
                path:"/allservices",
                Component: AllServicePage
            },
            {
                path: "servicedetails/:id",
                Component: DetailsPage
            }
        ]
    }
    
])