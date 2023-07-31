import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";



export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"signUp",
                element:<SignUp></SignUp>
            }
        ]
        
    }
])