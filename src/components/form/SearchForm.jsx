import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Radio from "./Radio";
import Dropdown from "./Dropdown";
import GenreInput from "./GenreInput";

const SearchForm = ({ setFormValue }) => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "All",
    },
  });

  const watchFormValue = watch();

  useEffect(() => {
    setFormValue(watchFormValue);
  }, [JSON.stringify(watchFormValue)]);

  return (
    <form className="space-y-1">
      <div>
        <p className="mb-2 text-[1.2vw] font-semibold">Media Type</p>
        <div className="flex flex-col">
          <Radio
            control={control}
            id="mediaType1"
            name={"mediaType"}
            title={"Movie"}
            value={"movie"}
            setValue={setValue}
          />
          <Radio
            control={control}
            id="mediaType2"
            name={"mediaType"}
            title={"TV Show"}
            value={"tv"}
            setValue={setValue}
          />
        </div>
      </div>
      <div>
        <p className="mb-2 text-[1.2vw] font-semibold">Genres</p>
        <div className="flex flex-wrap gap-2">
          <GenreInput name={"genres"} control={control} />
        </div>
      </div>
      <div>
        <p className="mb-2 text-[1.2vw] font-semibold">Rating</p>
        <Dropdown name={"rating"} control={control} />
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  setFormValue: PropTypes.func,
};
export default SearchForm;
