import useAppContext from "../../context/AppProvider";

const Paginate = () => {
  const { activeMovie, popularMovieList } = useAppContext();

  return (
    <div className="absolute right-10 bottom-10 z-10">
      <ul className="flex gap-1">
        {popularMovieList?.map((e, i) => (
          <li
            key={e.id}
            className={`h-1 w-5 cursor-pointer ${activeMovie == i ? "bg-white" : "bg-slate-600"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
export default Paginate;
