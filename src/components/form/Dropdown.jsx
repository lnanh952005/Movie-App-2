import { useController } from "react-hook-form";

const Dropdown = ({ name, control }) => {
  const { field } = useController({ name, control });
  return (
    <select
      className="rounded-lg border transition-all duration-150 outline-none focus:border-blue-500"
      {...field}
    >
      <option className="">All</option>
      <option className="">0 - 49</option>
      <option>50 - 69</option>
      <option>70 - 100</option>
    </select>
  );
};
export default Dropdown;
