import { useParams } from "react-router-dom";

import ActorList from "../actor/ActorList";

import MovieInfo from "@components/movie/MovieInfo";
import useFetch from "@/hooks/useFetch";
import MovieDetailBanner from "@components/banner/MovieDetailBanner";

import Modal from "@components/modal/Modal";
import useAppContext from "@/context/AppProvider";
import RelatedMovie from "@components/movie/RelatedMovie";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movieDetail, isLoading } = useFetch({
    api: `/movie/${id}?append_to_response=release_dates,content_ratings,credits,aggregate_credits,videos,recommendations`,
  });
  const { showModal, setShowModal } = useAppContext();

  const trailer = movieDetail?.videos?.results.find(
    (e) => e.type == "Trailer",
  )?.key;

  return (
    <div className="bg-slate-900 text-white">
      <Modal
        trailer={trailer}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <MovieDetailBanner
        isLoading={isLoading}
        movieDetail={movieDetail}
        setShowModal={setShowModal}
      />
      <div className="mx-auto flex w-[1350px] max-w-[calc(100%_-_40px)] gap-5 pt-10">
        <div className="flex-[2] flex-col">
          <ActorList
            mediaType={location.state}
            actors={movieDetail.credits?.cast}
          />
        </div>
        <div className="flex-1">
          <MovieInfo movieDetail={movieDetail} />
        </div>
      </div>
      <div className="mx-auto w-[1350px] max-w-[calc(100%_-_40px)] pt-10">
        <RelatedMovie
          title={"More like this"}
          relatedMovie={movieDetail?.recommendations?.results}
        />
      </div>
    </div>
  );
};
export default MovieDetailPage;
