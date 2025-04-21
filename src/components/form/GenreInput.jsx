import useFetch from "@/hooks/useFetch";
import { useController, useWatch } from "react-hook-form";

const GenreInput = ({ name, control }) => {
  const [mediaType, genres] = useWatch({
    control: control,
    name: ["mediaType", "genres"],
  });

  const { field } = useController({ name, control });

  const { data } = useFetch({
    api: `/genre/${mediaType}/list`,
    condition: !!mediaType,
  });
  return (
    <>
      {data?.genres?.length > 0 &&
        data?.genres.map((genreItem) => (
          <span
            {...field}
            key={genreItem.id}
            className={`rounded-lg border px-2 py-1 ${genres.includes(genreItem.id) ? "bg-blue-500" : ""}`}
            onClick={() => {
              if (field.value.includes(genreItem.id)) {
                field.onChange(field.value.filter((c) => c != genreItem.id));
              } else {
                field.onChange([...field.value, genreItem.id]);
              }
            }}
          >
            {genreItem.name}
          </span>
        ))}
    </>
  );
};
export default GenreInput;
