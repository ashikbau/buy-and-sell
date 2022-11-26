import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import AddProducts from "../Pages/Dashboard/AddProducts";

import MyProducts from "../Pages/Dashboard/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup";

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
            {
                path:'/categories/:id',
                element:<Category></Category>,
                loader:  ({ params }) => {
                    return fetch(`http://localhost:5000/categories/${params.id}`);
                  },
            },
            
            
        ]
    },

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'add-products',
                element:<AddProducts></AddProducts>
            },
            {
                path:'my-products',
                element:<MyProducts></MyProducts>
            }
        ]
    }
])