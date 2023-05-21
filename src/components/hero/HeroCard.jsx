import React from 'react';
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className='flex-col sm:flex-row border-cyan-500 border-opacity-20 rounded-md animate__animated animate__fadeIn flex w-full shadow-lg  px-3 py-5 dark:bg-gray-900 dark:shadow-none border-0 dark:border'>
            <img alt={'...'} className='w-auto h-52 object-contain' src={heroImages(`./${id}.jpg`)} />
            <div className={'ms-4 flex flex-col relative'}>
                <p className={'text-gray-950 dark:text-cyan-300 text-xl'}>{superhero}</p>
                {
                    // eslint-disable-next-line no-mixed-operators
                    (alter_ego !== characters) && <p className={'font-mono'}>{characters}</p> || <p>{first_appearance}</p>
                }
                <Link to={`/dashboard/hero/${id}`} className={'mt-3 sm:absolute bottom-0 row-span-1 w-20 px-3 py-1 rounded text-center bg-cyan-300 text-gray-950 hover:bg-cyan-500 transition ease-in-out hover:scale-105 hover:text-white'} >More...</Link>
            </div>
        </div>
    )
        ;
}

export default HeroCard;