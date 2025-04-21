import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

import useFetch from "@/hooks/useFetch";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeMovie, setActiveMovie] = useState(0);

  const { data: popularMovie, isLoading } = useFetch({
    api: "/movie/popular",
  });

  const [movieStatus, setMovieStatus] = useState("popular");
  const [tvShowStatus, setTvShowStatus] = useState("top_rated");
  
  const { data: movieList } = useFetch({
    api: `/movie/${movieStatus}`,
  });
  const { data: tvShowList } = useFetch({ api: `/tv/${tvShowStatus}` });

  const popularMovieList = popularMovie.results;

  const [showModal, setShowModal] = useState(false); 
  


  return (
    <AppContext.Provider
      value={{
        popularMovieList,
        activeMovie,
        setActiveMovie,
        isLoading,
        showModal,
        setShowModal,
        movieStatus,
        setMovieStatus,
        tvShowStatus,
        setTvShowStatus,
        movieList,
        tvShowList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default useAppContext;
