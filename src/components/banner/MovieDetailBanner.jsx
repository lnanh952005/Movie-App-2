import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Img from "@components/image/Img";
import Header from "@/layout/Header";
import { RatingCircle } from "../../utils/RatingCircle";

const MovieDetailBanner = ({ setShowModal, movieDetail  }) => {
  const {
    title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
    backdrop_path,

    first_air_date,

    original_name,
  } = movieDetail;
  const certification = movieDetail.release_dates?.results
    .find((e) => e.iso_3166_1 == "US")
    ?.release_dates?.find((c) => c.certification)?.certification;

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute h-full w-full">
        <Img
          width="100%"
          height={"100%"}
          className="absolute h-full w-full object-cover brightness-50"
          src={`https://image.tmdb.org/t/p/original${backdrop_path || poster_path}`}
        />
      </div>
      <div className="relative mx-auto flex h-full w-[1200px] max-w-[calc(100%_-_40px)] items-center justify-center gap-10">
        <Img
          width="300px"
          height="500px"
          sizeOfLoader={50}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="flex-1 text-[1.2vw]">
          <h1 className="text-[2vw] font-extrabold">
            {title || original_name}
          </h1>
          <div className="mt-3 mb-5 flex flex-wrap items-center gap-5">
            <span className="rounded-lg border p-2">{certification}</span>
            <span className="">{release_date || first_air_date}</span>
            <span className="">
              {genres?.map((e) => e.name).join(", ") || ""}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RatingCircle percent={Math.round(vote_average * 10) || 100} />
              <span>Rating</span>
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg border p-2"
            >
              <FontAwesomeIcon icon={faPlay} />
              <span>Trailer</span>
            </div>
          </div>
          <h3 className="text-[1.5vw] font-semibold">Overview</h3>
          <p className="mt-3">{overview}</p>
        </div>
      </div>
    </div>
  );
};

MovieDetailBanner.propTypes = {
  movieDetail: PropTypes.object,
  setShowModal: PropTypes.func
};
export default MovieDetailBanner;
