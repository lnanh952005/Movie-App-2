import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ showModal, setShowModal, trailer }) => {
  useEffect(() => {
    document.body.style.overflowY = showModal ? "hidden" : "scroll";
  }, [showModal]);

  return createPortal(
    <>
      {showModal && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          >
            <div className="bg-white">
              <iframe
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
                allow="autoplay"
                className="aspect-video w-[50vw]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
};

export default Modal;
