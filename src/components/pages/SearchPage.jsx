import useFetch from "@/hooks/useFetch";
import SearchForm from "@components/form/SearchForm";
import RelatedMedia from "@components/media/RelatedMedia";
import {  useState } from "react";
//https://api.themoviedb.org/3/search/movie?query=${searchMovie}

const SearchPage = () => {
  const [formValue, setFormValue] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const [gte, lte] =
    formValue.rating == "All" ? ["0", "100"] : formValue.rating.split(" - ");

  const { data } = useFetch({
    api: `/discover/${formValue.mediaType}?sort_by=popularity.desc&with_genres=${formValue.genres.join(",")}&vote_average.gte=${gte / 10}&vote_average.lte=${lte / 10}`,
    condition: !!formValue.mediaType,
  });

  return (
    <div className="bg-slate-900 text-white">
      <div className="mx-auto flex h-screen max-w-[calc(100%_-_40px)] gap-5 pt-[80px] pb-2">
        <div className="flex-1 rounded-lg border p-4 shadow-lg">
          <SearchForm formValue={formValue} setFormValue={setFormValue} />
        </div>
        <div className="flex flex-[5] flex-col overflow-y-auto">
          <RelatedMedia
            mediaType={formValue.mediaType}
            relatedMovie={data.results}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
