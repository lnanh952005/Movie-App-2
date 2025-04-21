import PropTypes from "prop-types"
const TVShowInfo = ({ tvShowDetail }) => {
  const { name, origin_country, status, networks } = tvShowDetail;
  return (
    <div>
      <h3 className="mb-5 text-[1.5vw] font-bold">Information</h3>
      <div>
        <div className="mb-4">
          <p className="mb-1 text-[1vw] font-bold">Original Title</p>
          <p>{name}</p>
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
          <p className="mb-1 text-[1vw] font-bold">Net work</p>
          <img
            src={`https://media.themoviedb.org/t/p/h30${networks?.[0]?.logo_path}`}
          />
        </div>
      </div>
    </div>
  );
};
TVShowInfo.propTypes = {
  tvShowDetail: PropTypes.object
}
export default TVShowInfo;
