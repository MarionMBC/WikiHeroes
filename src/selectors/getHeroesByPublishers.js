import {heroes} from "../data/heroes";



export const getHeroesByPublishers = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${ publisher } is no a valid publisher.`)
    }
    return heroes.filter( hero => hero.publisher === publisher)
}

