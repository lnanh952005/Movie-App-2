import Img from "@components/image/Img";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ActorCard = ({ actor = {} }) => {
  const { id, name, character, profile_path } = actor;
  console.log(actor);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/people/${id}`)}
      className="flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-400 shadow-sm"
    >
      <Img
        width="100%"
        height="250px"
        sizeOfLoader={30}
        className="h-full w-full rounded-lg object-cover transition-all duration-300 hover:scale-110"
        src={`https://media.themoviedb.org/t/p/original${profile_path}`}
      />
      <div className="flex flex-1 flex-col p-2">
        <h4 className="text-[1.2vw] font-bold">{name}</h4>
        <div className="mt-auto flex justify-between items-center pt-5">
          <p>{character}</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};
ActorCard.propTypes = {
  actor: PropTypes.object,
};
export default ActorCard;
