import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

const PublicRoute = ({children}) => {

    const userContext = useContext(AuthContext);
    const {user} = userContext;
    return (
        user.logged ? <Navigate to={'/dashboard/home'}/> : children
    );
}

export default PublicRoute;