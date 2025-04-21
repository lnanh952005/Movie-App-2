import PropTypes from "prop-types"
import { useEffect, useState } from "react";

import { RatingCircle } from "../../utils/RatingCircle";
const SeasonList = ({ seasons = []  }) => {
  const [season, setSeason] = useState([]);
  console.log(seasons);
  useEffect(() => {
    if (seasons?.length > 4) {
      setSeason(seasons.slice(0, 4)?.reverse());
    } else {
      setSeason(seasons?.reverse());
    }
  }, [seasons]);

  return (
    <>
      <h3 className="mb-5 text-[1.5vw] font-bold">Seasons</h3>
      <div className="space-y-5">
        {season?.length > 0 &&
          season.map((e) => (
            <div key={e.id} className="flex gap-5 rounded-lg border p-4">
              <div className="h-[300px] w-[200px]">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={`https://media.themoviedb.org/t/p/original${e.poster_path}`}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <p className="mb-5 text-[1.5vw] font-bold">{e.name}</p>
                <div className="flex items-center gap-5">
                  <p className="text-[1.3vw]">Rating</p>
                  <RatingCircle
                    size={3}
                    percent={Math.round(e.vote_average * 10)}
                  />
                </div>
                <p className="mb-2 text-[1.3vw]">Release Date: {e.air_date}</p>
                <p className="mb-2 text-[1.3vw]">{e.episode_count} Eposodes</p>
                <p className="mb-2 text-[1vw]">{e.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

SeasonList.propTypes = {
  seasons: PropTypes.array
}
export default SeasonList;
