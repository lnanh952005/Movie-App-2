import PropTypes from "prop-types";
const StatusList = ({ curStatus, setCurStatus, statusList }) => {
  return (
    <ul className="flex w-fit rounded-lg border mb-10">
      {statusList.map((e) => (
        <li
          onClick={() => setCurStatus(e.status)}
          key={e.name}
          className={`cursor-pointer rounded-lg px-3 py-2 capitalize ${curStatus == e.status ? "bg-white text-black" : ""}`}
        >
          {e.name}
        </li>
      ))}
    </ul>
  );
};

StatusList.propTypes = {
  statusList: PropTypes.array,
  curStatus: PropTypes.string,
  mediaType: PropTypes.string,
  setCurStatus: PropTypes.func,
};
export default StatusList;
