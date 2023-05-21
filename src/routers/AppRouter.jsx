import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {LoginScreen} from '../components/login/LoginScreen'
import DashBoardRoutes from "./DashBoardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {
    return (
            <Routes>
                <Route path={'/*'} element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                }/>
                <Route>
                    <Route path={'/dashboard/*'} element={
                        <PrivateRoute>
                            <DashBoardRoutes/>
                        </PrivateRoute>
                    }/>
                </Route>
            </Routes>

    )
}
