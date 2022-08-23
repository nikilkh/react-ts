import React, { useContext, useState } from "react";
import { createContext } from "react";
export type contextType = {
  movies: movieData[] | null;
  setMovies: React.Dispatch<React.SetStateAction<movieData[] | null>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  showMovies: boolean;
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>;
  noResult: boolean;
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>;
  showBooking: boolean;
  setShowBooking: React.Dispatch<React.SetStateAction<boolean>>;
};



export type contextProviderProps = {
  children: React.ReactNode;
};

export type movieData = {
  id: number;
  title: string;
  poster_path: string;
};

export const context = createContext<contextType | null>(null);

export default function StateContextProvider({
  children,
}: contextProviderProps) {
  const [movies, setMovies] = useState<movieData[] | null>([]);
  const [input, setInput] = useState<string>("");
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [showBooking, setShowBooking] = useState<boolean>(false);
  return (
    <context.Provider
      value={{
        movies,
        setMovies,
        input,
        setInput,
        showMovies,
        setShowMovies,
        noResult,
        setNoResult,
        showBooking,
        setShowBooking,
      }}
    >
      {children}
    </context.Provider>
  );
}

export const useAppContext = () => useContext<contextType | null>(context);
