import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
const Img = ({
  alt,
  src,
  width,
  height,
  onClick,
  className,
  sizeOfLoader = 100,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoading(false);
    };
    return () => (image.onload = null);
  }, [src]);
  return (
    <div
      style={{
        position: "relative",
        width: `${width}`,
        height: `${height}`,
      }}
    >
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PacmanLoader color="#ccc" size={sizeOfLoader} />
        </div>
      ) : (
        <img alt={alt} src={src} onClick={onClick} className={className} />
      )}
    </div>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.string,
  className: PropTypes.string,
  sizeOfLoader: PropTypes.number,
};
export default Img;
