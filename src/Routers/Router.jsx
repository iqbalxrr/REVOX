import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";
import SigninPage from "../Pages/SigninPage";

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
            }
        ]
    }
    
])