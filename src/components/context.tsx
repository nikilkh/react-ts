import React, { useState } from "react";
import { createContext } from "react";


type contextType = {
  movies: movieData[] | null
  setmovies: React.Dispatch<React.SetStateAction<movieData[] | null>>
  input: string |null
  setinput: React.Dispatch<React.SetStateAction<string | null>>
  showMovies: boolean
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>
  noResult: boolean
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>
  showBooking: boolean
  setShowBooking: React.Dispatch<React.SetStateAction<boolean>>
}



export type contextProviderProps = {
  children: React.ReactNode
}

export interface obj {
  result:movieData[]
}

export type movieData= {
  id: number
title: string
poster_path: string
}

export const context = createContext<contextType | null>(null);


export default function StateContextProvider({children}: contextProviderProps) {
  const [movies, setmovies] = useState<movieData[] | null>([])
  const [input, setinput] = useState<string | null>("");
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [showBooking, setShowBooking] = useState<boolean>(false);
  return(
    <context.Provider value={
      {movies,
      setmovies,
      input,
      setinput,
      showMovies,
      setShowMovies,
      noResult,
      setNoResult,
      showBooking,
      setShowBooking}}>
{children}
    </context.Provider>
  )
}