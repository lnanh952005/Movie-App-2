import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
const LoadingMovieBannerS = styled.div`
  .skeleton-container {
    display: block;
    width: 100%;
    height: 100%;
  }
`
const LoadingMovieBanner = () => {
  return (
    <LoadingMovieBannerS className="w-full h-screen">
      <SkeletonTheme
        inline={true}
        height={"100vh"}
        baseColor="#202020"
        highlightColor="#444"
        duration={2}
      >
        <Skeleton containerClassName="skeleton-container" height={"100vh"} />
      </SkeletonTheme>
    </LoadingMovieBannerS>
  );
};
export default LoadingMovieBanner;
