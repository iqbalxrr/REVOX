import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";
import SigninPage from "../Pages/SigninPage";
import AddServicePage from "../Pages/AddServicePage";
import AllServicePage from "../Pages/AllServicePage";
import DetailsPage from "../Pages/DetailsPage";
import MyServicesPage from "../Pages/MyServicesPage";
import MyReviewPage from "../Pages/MyReviewPage";
import PrivateRoute from "../Routers/PrivateRoute/PrivateRoute";
import NotFoundPage from "../Pages/NotFoundPage";
import About from "../Components/About";
import Contact from "../Components/Contact";



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
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddServicePage></AddServicePage></PrivateRoute>
            },
            {
                path:"/allservices",
                Component: AllServicePage
            },
            {
                path: "servicedetails/:_id",
                Component: DetailsPage
            },
            {
                path: "/myservices",
                element: <PrivateRoute><MyServicesPage></MyServicesPage></PrivateRoute>
            },
            {
                path: "/myreviews",
                element: <PrivateRoute> <MyReviewPage></MyReviewPage> </PrivateRoute>

            }
        ]
    },
    
    {
        path: "*",
        Component: NotFoundPage

    }
    
])