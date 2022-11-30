import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import AddProducts from "../Pages/Dashboard/AddProducts";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";

import MyBookings from "../Pages/Dashboard/MyBookings";

import MyProducts from "../Pages/Dashboard/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import BecomeASeller from "../Pages/Dashboard/AllBuyers/BecomeASeller";
import BecomeABuyer from "../Pages/Dashboard/AllBuyers/BecomeABuyer";

import RecentBlogs from "../Pages/RecentBlogs/RecentBlogs";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Payment from "../Pages/Payment/Payment";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>

            },

            {path: "/blogs",
            element:<RecentBlogs></RecentBlogs>

            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><Category></Category></PrivateRoute>,
                loader:  ({ params }) => {
                    return fetch(`http://localhost:5000/categories/${params.id}`);
                  },
            },
            
            
        ]
    },

    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'add-products',
                element:<AddProducts></AddProducts>
            },
            {
                path:'my-products',
                element:<MyProducts></MyProducts>
            },

            {
                path:'my-bookings',
                element:<MyBookings></MyBookings>
            },
            {
                path:'all-buyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'all-sellers',
                element: <AllSeller></AllSeller>
            },
            {
                path:'all-users',
                element: <AllUsers></AllUsers>
            },


            {
                path:'become-seller',
                element: <BecomeASeller></BecomeASeller>
            },

            {
                path:'become-buyer',
                element: <BecomeABuyer></BecomeABuyer>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])