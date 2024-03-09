"use client"

import { createContext, use, useContext, useEffect, useState } from "react";
import { countGame, gameList, getBestGames, getDetailGames, getGenre, getGenreGame, getTop50, searchGames } from "../api/api";
import LoadingIcon from "../component/LoadingIcon";

interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: { id: number; name: string }[];
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  released: string;
  ratings_count : number
  rating_top: number;
  reviews_count : number;
  metacritic:number;
}

interface Genre {
  id : number;
  name : string;
  slug : string;
  image_background : string
}

interface GameContextProps {
  allGames: Game[];
  count : string;
  loading : boolean;
  isLoading : boolean;
  genres : Genre[];
  gamesGenresAndPlat : Game[];
  allTime : Game[];
  details : any;
  bestOfTheYear : Game[];
  handleGetIdGenres : (id:number) => void;
  handleGetDetailGames : (id:number) => void;
  searchGamesAll : (name:string) => void;
  
}

const GameContext = createContext<GameContextProps>({} as GameContextProps);

interface Props {
  children: React.ReactNode;
}

const GameProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [genres,setAllGenres] = useState<Genre[]>([]);
  const [count,setCount] = useState("Loading...")
  const [loading,setLoading] = useState(true)
  const [gamesGenresAndPlat,setGenresAndPlat] = useState<Game[]>([]);
  const [allTime,setAllTime] = useState<Game[]>([])
  const [bestOfTheYear,setBest] = useState<Game[]>([])
  const [details,setDetail] = useState({})
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    gameList().then((result: any) => {
        setAllGames(result);
        setLoading(false)
    })

    countGame().then((hasil: any) => {
        setCount(hasil)
      })

    
    getGenre().then((response:any)=>{
       setAllGenres(response)
    });

    getTop50().then((item:any) => {
      setAllTime(item)
    });

    getBestGames().then((games:any) => {
      setBest(games)
    })
    
  }, []);

  async function handleGetIdGenres(e:number) {
    const games = await getGenreGame(e)
    setGenresAndPlat(games)
    setIsLoading(false)
  }

  async function handleGetDetailGames(e:number) {
    const detail = await getDetailGames(e)
    setDetail(detail)
    setIsLoading(false)
  }

  async function searchGamesAll(e:any) {
    const result:any = await searchGames(e)
    setAllGames(result)
  }


  return (
    <GameContext.Provider value={{allGames, count, loading, genres, gamesGenresAndPlat, handleGetIdGenres, allTime, bestOfTheYear, details, handleGetDetailGames, isLoading, searchGamesAll}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

export default GameProvider;