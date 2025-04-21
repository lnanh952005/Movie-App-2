import { useController } from "react-hook-form";

const Radio = ({ id, name, control, title, value, setValue }) => {
  const { field } = useController({ name, control });
  return (
    <div className="flex items-center gap-x-2">
      <input
        checked={field.value == value}
        {...field}
        onChange={() => {
          setValue("mediaType", value);
          setValue("genres", []);
        }}
        id={id}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};
export default Radio;
