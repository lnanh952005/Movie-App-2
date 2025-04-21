import "swiper/css";
import "swiper/css/bundle";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import Paginate from "./Paginate";
import MovieBanner from "./MovieBanner";
import useAppContext from "../../context/AppProvider";
import Modal from "@components/modal/Modal";
import useFetch from "@/hooks/useFetch";

const HomeBanner = () => {
  const {
    isLoading,
    setActiveMovie,
    popularMovieList,
    showModal,
    setShowModal,
  } = useAppContext();
  const [activeID, setActiveID] = useState(null);
  const { data } = useFetch({
    api: `/movie/${activeID}/videos`,
    condition: !!activeID,
  });
  const trailer = data?.results?.find((e) => e.type == "Trailer")?.key;
  return (
    <div className="relative h-screen w-full">
      <Modal
        trailer={trailer}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {isLoading && (
        <div className="absolute inset-0 z-10 flex bg-[#ccc]">
          <PacmanLoader className="m-auto" size={150} />
        </div>
      )}
      {!isLoading && (
        <Swiper
          grabCursor={true}
          loop={popularMovieList?.length >= 3}
          speed={6000}
          spaceBetween={0}
          slidesPerView={1}
          className="h-full w-full"
          modules={[Autoplay, EffectFade]}
          onSlideChange={(e) => setActiveMovie(e.realIndex)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // vẫn tiếp tục auto sau khi người dùng tương tác
          }}
        >
          {popularMovieList?.length > 0 &&
            popularMovieList.map((e) => (
              <SwiperSlide key={e.id}>
                <MovieBanner setActiveID={setActiveID} movie={e} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <Paginate />
    </div>
  );
};
export default HomeBanner;
