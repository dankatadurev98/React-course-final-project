import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export default function PublicGuard(){

    const {user} = useContext(AuthContext);

    if(user){
        return < Navigate to={'/'} replace/>
    }

    return <Outlet/>
}