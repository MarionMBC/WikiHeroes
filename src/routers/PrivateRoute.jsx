import React, {useContext} from 'react';
import {AuthContext} from "../context/authContext";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    localStorage.setItem('lastPath', pathname+search);

    console.log(user)
   return (
            user.logged ? children : <Navigate to={'/login'} />
    );
}

export default PrivateRoute;