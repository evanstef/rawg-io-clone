import axios from "axios"

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 


export const gameList = async () => {
    const game = await axios.get(`${baseUrl}/games?key=${apiKey}&page=1`)
    return game.data.results
}

export const countGame = async () => {
    const count = await axios.get(`${baseUrl}/games?key=${apiKey}&page=1`)
    return count.data.count
}

export const getGenre = async () => {
    const genre = await axios.get(`${baseUrl}/genres?key=${apiKey}&page=1`)
    return genre.data.results
}

export const getGenreGame = async (id:number) => {
    const gameGenre = await axios.get(`${baseUrl}/games?key=${apiKey}&genres=${id}&page=1`)
    return gameGenre.data.results
}

export const getTop50 = async () => {
    const top = await axios.get(`${baseUrl}/games?key=${apiKey}&ordering=-rating&page_size=50`)
    return top.data.results
}

export const getBestGames = async () => {
    const popular = await axios.get(`${baseUrl}/games?dates=2022-01-01,2023-12-31&ordering=-rating&page=1&page_size=50&key=${apiKey}`)
    return popular.data.results
}

export const getDetailGames = async (id:number) => {
    const detail = await axios.get(`${baseUrl}/games/${id}?key=${apiKey}`)
    return detail.data
}   

export const searchGames = async (name:string) => {
    const search = await axios.get(`${baseUrl}/games?key=${apiKey}&search=${name}&page=1`)
    return search.data.results
}
