import React, {useMemo} from 'react';
import {getHeroesByPublishers} from "../../selectors/getHeroesByPublishers";
import HeroCard from "./HeroCard";

const HeroesList = ({publisher=''}) => {
    const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);
    return (
        <div className={'animate__animated animate__fadeIn'}>
            <h1 className={'font-medium text-gray-950 mb-2 dark:text-cyan-300'}>{ publisher }</h1>
            <div className={'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'}>
                {
                    heroes.map(hero=>
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        ></HeroCard>
                    )
                }
            </div>
        </div>

    )

}

export default HeroesList;