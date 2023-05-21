import React from 'react';
import {Route, Routes} from "react-router-dom";
import {DcScreen} from "../components/dc/DcScreen";
import Hero from "../components/hero/Hero";
import HomeScreen from "../components/home/HomeScreen";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import NavBar from "../components/NavBar/NavBar";
import {SearchScreen} from "../components/search/SearchScreen";

const DashBoardRoutes = () => {
    return (
        <>
            <NavBar/>
            <div className='px-5 h-full'>
            <Routes>
                <Route path='home' element={<HomeScreen/>}/>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='hero/:idHero' element={<Hero/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='*' element={<HomeScreen/>}/>
            </Routes>
            </div>
        </>
    )
}
export default DashBoardRoutes;