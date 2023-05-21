import React, {useMemo} from 'react';
import {getHeroByID} from "../../selectors/getHeroByID";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {heroImages} from "../../helpers/heroImages";

const Hero = () => {
    const {idHero} = useParams()
    const hero = useMemo(()=> getHeroByID(idHero) , [idHero])
    const navigate = useNavigate()
    const handleBack = () => {
        if (!hero) {
            return <Navigate to={'/dashBoard/home'}/>
        }
        navigate(-1);
    }
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero

    return (
        <div className={'h-screen animate__animated animate__fadeInLeft md:px-24 md:pb-24'}>
            <div className={'flex flex-col sm:flex-row'}>
                <img className={'rounded mt-5 self-center h-96 w-fit shadow-cyan-900 shadow-2xl'}
                     alt={publisher} src={heroImages(`./${idHero}.jpg`)}/>
                <div className={'m-5'}>
                    <p className={'h-fit text-2xl border-b-2 border-b-cyan-300'}>{superhero}</p>
                    <p className={'text-xl'}><span
                        className={'text-cyan-400 dark:text-cyan-300 text-xl'}>First appearance:</span> {first_appearance}</p>
                    <p className={'text-xl'}><span className={'text-cyan-400 dark:text-cyan-300'}>Alter ego: </span>{alter_ego}</p>
                    <p className={'text-xl'}><span className={'text-cyan-400 dark:text-cyan-300'}>Publisher:</span> {publisher}
                    </p>
                    <p className={'text-xl italic'}><span
                        className={'text-cyan-400 dark:text-cyan-300 not-italic'}>Characters: </span>{characters}</p>
                    <button onClick={handleBack}
                            className={'px-3 py-2 bg-cyan-300 rounded mt-5 hover:bg-cyan-500 text-gray-950 hover:text-white transition ease-in-out hover:scale-105'}>Back
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Hero;