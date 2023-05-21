import React from 'react'
import HeroesList from "../hero/HeroesList";

export const DcScreen = () => {
  return (
      <>
        <h1 className={'text-2xl mb-2'}>DC Heroes</h1>
        <HeroesList publisher={'DC Comics'}/>
      </>
  )
}
