import PropTypes from "prop-types";
import { toUSD } from "@/utils/constant";
const MovieInfo = ({ movieDetail }) => {
  const {
    title,
    origin_country,
    status,
    budget,
    revenue,
  } = movieDetail;

  return (
    <div>
      <h3 className="mb-5 text-[1.5vw] font-bold">Information</h3>
      <div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Original Title</p>
          <p>{title}</p>
        </div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Original Country</p>
          <p className="flex gap-2">
            {origin_country?.map((e) => (
              <img
                className="w-[1.5vw]"
                key={e}
                src={`https://flagcdn.com/48x36/${e.toLowerCase()}.png`}
                alt=""
              />
            ))}
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Status</p>
          <p>{status}</p>
        </div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Budget</p>
          <p>{toUSD(budget)}</p>
        </div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Revenue</p>
          <p>{toUSD(revenue)}</p>
        </div>
      </div>
    </div>
  );
};
MovieInfo.propTypes = {
  mediaType: PropTypes.string,
  movieDetail: PropTypes.object,
};
export default MovieInfo;
