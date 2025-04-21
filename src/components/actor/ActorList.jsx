import { useState } from "react";
import PropTypes from "prop-types"
import ActorCard from "./ActorCard";

const ActorList = ({  actors = [] }) => {
  const [showMore, setShowMore] = useState(false);
  const currentActor = showMore ? actors.slice(0) : actors.slice(0, 4);
  return (
    <>
      <h3 className="mb-5 text-[1.5vw] font-bold">Actors</h3>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {currentActor.map((e) => (
          <ActorCard actor={e} key={e.id} />
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mx-auto block cursor-pointer rounded-lg px-4 py-2"
      >
        {!showMore ? "Show more..." : "Show Less"}
      </button>
    </>
  );
};
ActorList.propTypes = {
  actors: PropTypes.array
}
export default ActorList;
