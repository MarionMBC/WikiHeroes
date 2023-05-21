import React, {useContext} from 'react'
import { useNavigate} from "react-router-dom";
import {types} from "../../types/types";
import {AuthContext} from "../../context/authContext";
import './LoginScreen.css'
export const LoginScreen = () => {
    // Ofrece una función para navegar a otras pantallas.
    const lastPath = localStorage.getItem('lastPath') || '/dashBoard/home'

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Marion' }
        }
        dispatch(action)
        navigate(`${lastPath}`, {
            // Reemplaza la historia
            replace: true
        })

    }

    return (
        <section>
            <div className={'relative mt-10 flex justify-center'}>
                <h1 className={'text-3xl absolute font-medium'}>Wiki<span className={'text-cyan-300'}>Heroes</span></h1>
            </div>
            <div className={'h-screen text-center flex justify-center items-center loginButton sm:mx-32 p-10'}>
                <span onClick={handleLogin} className={'cursor-pointer'}></span>
            </div>
        </section>
    )
}
