import React, {useContext, useEffect, useReducer} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import {darkContext} from './context/DarkThemeContext';
import {AppRouter} from './routers/AppRouter';
import Footer from "./components/footer/Footer";
import {AuthContext} from "./context/authContext";
import {authReducer} from "./auth/authReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

function HeroesApp() {
    const {darkToggle} = useContext(darkContext)
    const [user, dispatch] = useReducer(authReducer, '', init);

    useEffect(() => {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);



    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <BrowserRouter>
                <div className={`${darkToggle && 'dark'} h-screen`}>
                    <div
                        className='min-h-screen overflow-auto snap-y lg:px-12 bg-white text-gray-700 dark:bg-gray-900 dark:text-white'>
                        <AppRouter/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}


export default HeroesApp;
