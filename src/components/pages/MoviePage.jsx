import useAppContext from "@/context/AppProvider";
import StatusList from "@components/media/StatusList";
import MovieList from "@components/movie/MovieList";
const movieStatusList = [
  {
    status: "popular",

    name: "Popular",
  },
  {
    status: "top_rated",

    name: "Top rated",
  },
  {
    status: "now_playing",

    name: "Now playing",
  },

  {
    status: "upcoming",

    name: "Upcoming",
  },
];

const MoviePage = () => {
  const { movieStatus, setMovieStatus } = useAppContext();
  return (
    <div className="bg-slate-900 px-[40px] text-[1.2vw] text-white">
      <h3 className="pt-[100px] pb-5 text-center text-[2vw] font-bold">
        Movies
      </h3>
      <StatusList
        mediaType={"movie"}
        curStatus={movieStatus}
        statusList={movieStatusList}
        setCurStatus={setMovieStatus}
      />
      <MovieList />
    </div>
  );
};
export default MoviePage;
