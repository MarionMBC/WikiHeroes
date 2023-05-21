import {heroes} from "../data/heroes";

export const getHeroByName = (heroName) => {
    if (heroName.trim().length > 0) {
        const filteredHeroes=  heroes.filter(hero => hero.superhero.toLowerCase().includes(heroName.toLowerCase()))
        if(filteredHeroes.length===0) {return ['No se han encontrado resultados.']} else return filteredHeroes
    }
}