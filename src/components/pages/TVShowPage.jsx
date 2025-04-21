import useAppContext from "@/context/AppProvider";
import StatusList from "@components/media/StatusList";
import TVShowList from "@components/tv show/TVShowList";
const tvShowStatusList = [
  {
    status: "top_rated",

    name: "Top rated",
  },
  {
    status: "popular",

    name: "Popular",
  },
  {
    status: "airing_today",

    name: "Airing today",
  },
  {
    status: "on_the_air",

    name: "On the air",
  },
];

const TVShowPage = () => {
  const { tvShowStatus, setTvShowStatus } = useAppContext();
  return (
    <div className="bg-slate-900 px-[40px] text-[1.2vw] text-white">
      <h3 className="pt-[100px] pb-5 text-center text-[2vw] font-bold">
        TV Shows
      </h3>
      <StatusList
        mediaType={"tv"}
        curStatus={tvShowStatus}
        statusList={tvShowStatusList}
        setCurStatus={setTvShowStatus}
      />
      <TVShowList />
    </div>
  );
};
export default TVShowPage;
