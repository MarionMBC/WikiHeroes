import React from 'react'
import HeroesList from "../hero/HeroesList";

export const MarvelScreen = () => {
    return (
     <div className={'pb-32'}>
         <h1 className={'text-2xl mb-2'}>Marvel Heroes</h1>
         <HeroesList publisher={'Marvel Comics'}/>
     </div>
    )
}
