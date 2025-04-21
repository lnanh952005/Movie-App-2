import useAppContext from "@/context/AppProvider";
import useFetch from "@/hooks/useFetch";
import ActorList from "@components/actor/ActorList";
import Modal from "@components/modal/Modal";
import { useParams } from "react-router-dom";
import TVShowDetailBanner from "@components/banner/TVShowDetailBanner";
import TVShowInfo from "@components/tv show/TVShowInfo";
import RelatedTvShow from "@components/tv show/RelatedTvShow";
import SeasonList from "@components/tv show/SeasonList";

const TvShowDetailPage = () => {
  const { id } = useParams();

  const { data: tvShowDetail, isLoading } = useFetch({
    api: `/tv/${id}?append_to_response=release_dates,content_ratings,credits,aggregate_credits,videos,recommendations`,
  });
  const { showModal, setShowModal } = useAppContext();

  const trailer = tvShowDetail?.videos?.results.find(
    (e) => e.type == "Trailer",
  )?.key;

  console.log(tvShowDetail);
  return (
    <div className="bg-slate-900 text-white">
      <Modal
        trailer={trailer}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <TVShowDetailBanner
        isLoading={isLoading}
        tvShowDetail={tvShowDetail}
        setShowModal={setShowModal}
      />
      <div className="mx-auto flex w-[1350px] max-w-[calc(100%_-_40px)] gap-5 pt-10">
        <div className="flex-[2] flex-col">
          <ActorList actors={tvShowDetail.credits?.cast} />
        </div>
        <div className="flex-1">
          <TVShowInfo tvShowDetail={tvShowDetail} />
        </div>
      </div>
      <div className="mx-auto w-[1350px] max-w-[calc(100%_-_40px)] pt-10">
        <SeasonList seasons={tvShowDetail.seasons} />
      </div>
      <div className="mx-auto w-[1350px] max-w-[calc(100%_-_40px)] pt-10">
        <RelatedTvShow
          title={"More like this"}
          relatedTvShow={tvShowDetail?.recommendations?.results}
        />
      </div>
    </div>
  );
};
export default TvShowDetailPage;
