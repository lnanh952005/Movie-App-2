import useAppContext from "@/context/AppProvider";
import TVShowCard from "./TVShowCard";

const TVShowList = () => {
  const { tvShowList } = useAppContext();
  const mediaList = tvShowList.results;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {mediaList?.length > 0 &&
        mediaList.map((e) => <TVShowCard key={e.id} tvShowCard={e} />)}
    </div>
  );
};
export default TVShowList;
