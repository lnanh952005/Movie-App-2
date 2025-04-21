import { Controller } from "react-hook-form";
import PropTypes from "prop-types"

const FormField = ({ name, control, label, Component }) => {
  return (
    <div>
      <p className="mb-1 font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Component {...field} />}
      />
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  label: PropTypes.string,
  Component: PropTypes.element
}
export default FormField;
