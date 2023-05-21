import React, {useEffect, useState} from 'react'
import {useForm} from "../../hooks/useForm";
import {getHeroByName} from "../../selectors/getHeroByName";
import HeroCard from "../hero/HeroCard";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string'
export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} = queryString.parse(location.search);

    const [formState, handleInputChange, , , ] = useForm(
        {
            heroName: q
        }
    )
    const [heroesFiltered, setHeroesFiltered] = useState()
    const {heroName} = formState

    useEffect(() => {
        const hero = getHeroByName(q)
        setHeroesFiltered(hero)
        return () => {
            console.log('Desmontado')
        };
    }, [q]);



    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${heroName}`)
    }


    return (
        <div className={'h-auto animate__animated animate__fadeIn'}>
            <div className={''}>
                <p className={'text-2xl dark:text-cyan-300'}>Search Heroes</p>
                <form onSubmit={handleSearch}>
                    <div className={'relative'}>
                        <input type="text" name={'heroName'} id="heroName"
                               value={heroName}
                               onChange={handleInputChange}
                               className="mt-2 border border-gray-200 bg-cyan-50 focus:ring-cyan-50 text-gray-900 text-sm rounded-lg block w-full dark:border-cyan-300 p-3 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300"
                               placeholder="Spider Man" required/>
                        <button type="submit"
                                className="absolute top-auto bottom-2 right-2.5  bg-cyan-300 hover:bg-cyan-500 transition ease-in-out hover:scale-105 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1  dark:focus:ring-cyan-200">Search
                        </button>
                    </div>
                </form>
            </div>
            <div className={''}>
                {heroesFiltered && <p className={'my-3 text-md dark:text-cyan-300'}>Results ({typeof heroesFiltered[0] === 'object' ? heroesFiltered.length : 0})</p>}
                {heroesFiltered && <div className={'mt-2 animate__animated animate__fadeIn grid gap-3 md:grid-cols-2 lg:grid-cols-3'}>
                    {heroesFiltered.map(hero => typeof hero === 'string' ?
                        <p key={null} className={'animate__animated animate__fadeIn'}>{hero}</p> : <HeroCard key={hero.id}  {...hero}/>)}
                </div>}
            </div>
        </div>
    )
}
