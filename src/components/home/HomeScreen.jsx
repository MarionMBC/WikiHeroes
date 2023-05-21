import React from 'react';
import HeroCard from "../hero/HeroCard";
import {getHeroesByPublishers} from "../../selectors/getHeroesByPublishers";

function HomeScreen() {
    const landing_hero = getHeroesByPublishers('Marvel Comics')[0]
    console.log(landing_hero)
    return (
        <div className={'h-screen sm:px-10 sm:py-5 animate__animated animate__fadeIn'}>
            <div>
                <h1 className={'text-2xl'}>Welcome<span
                    className={'text-cyan-400 dark:text-cyan-300 font-bold'}>!</span></h1>
            </div>
            <div className={'mt-3'}>
                <p>WikiHeroes is a community where you can find any information about Heroes.
                    Discover, share and enjoy interesting information about your favorites heroes.
                </p>
            </div>
            <div>
                <p className={'text-xl text-center m-3 font-medium underline underline-offset-4'}>Hero of the week!</p>
            </div>
            <HeroCard {...landing_hero}>

            </HeroCard>


        </div>
    );
}

export default HomeScreen;