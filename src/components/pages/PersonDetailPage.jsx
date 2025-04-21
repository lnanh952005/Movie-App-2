import useFetch from "@/hooks/useFetch";
import Img from "@components/image/Img";
import RelatedMedia from "@components/media/RelatedMedia";

import { useParams } from "react-router-dom";

const PersonDetailPage = () => {
  const { id } = useParams();
  const { data } = useFetch({
    api: `/person/${id}?append_to_response=combined_credits`,
  });
  const {
    name,
    birthday,
    biography,
    place_of_birth,
    profile_path,
    known_for_department,
    gender,
    combined_credits,
  } = data;
  const newGender =
    gender == 0
      ? "Not set / not specified"
      : gender == 1
        ? "Female"
        : gender == 2
          ? "Male"
          : "Non-binary";
  return (
    <div className="bg-slate-900 text-white">
      <div className="mx-auto flex w-[1200px] max-w-[calc(100%_-_40px)] gap-10 pt-[100px]">
        <div className="flex-1">
          <Img
            className="h-full w-full rounded-lg object-cover"
            sizeOfLoader={20}
            src={`https://media.themoviedb.org/t/p/original${profile_path}`}
            height="300px"
            width="100%"
          />
          <div className="space-y-4">
            <h3 className="text-[1.5vw] font-bold">Personal Information</h3>
            <div>
              <h4 className="text-[1.2vw] font-bold">Known For</h4>
              <p className="text-[1vw]">{known_for_department}</p>
            </div>
            <div>
              <h4 className="text-[1.2vw] font-bold">Gender</h4>
              <p className="text-[1vw]">{newGender}</p>
            </div>
            <div>
              <h4 className="text-[1.2vw] font-bold">Place of Birth</h4>
              <p className="text-[1vw]">{place_of_birth}</p>
            </div>
            <div>
              <h4 className="text-[1.2vw] font-bold">Birth day</h4>
              <p className="text-[1vw]">{birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex-[4]">
          <h3 className="text-[2vw] font-semibold">{name}</h3>
          <p>BioGraphy</p>
          <p className="whitespace-pre-line">{biography}</p>
          <div className="mt-3 w-full">
            <RelatedMedia
              title={"Know For"}
              mediaType={"movie"}
              relatedMovie={combined_credits?.cast}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonDetailPage;
