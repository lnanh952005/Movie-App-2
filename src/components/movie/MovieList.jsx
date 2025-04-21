import MovieCard from "../movie/MovieCard";
import useAppContext from "@/context/AppProvider";

const MovieList = () => {
  const { movieList } = useAppContext();
  const mediaList = movieList.results;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {mediaList?.length > 0 &&
        mediaList.map((e) => <MovieCard key={e.id} movieCard={e} />)}
    </div>
  );
};
export default MovieList;
