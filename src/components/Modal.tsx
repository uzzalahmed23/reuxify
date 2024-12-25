import { useEffect, useRef, useState } from "react";
function Modal() {
  const modal = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  function closeModal() {
    console.log("testing");

    setIsExiting(true);
    setTimeout(() => {
      setShowModal(false);
    }, 400);
  }
  useEffect(() => {
    function handleOutSideClick(e) {
      e.stopPropagation();
      if (modal.current && modal.current.contains(e.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleOutSideClick);
  });
  return (
    <section className="py-10">
      <div className="container">
        <div
          ref={modal}
          className={`fixed inset-0 p-20 bg-black/40 z-[1]  justify-center backdrop-blur-sm transition-all duration-300  ${
            showModal ? "flex" : "hidden"
          }`}
        >
          <div
            className={`relative modalContent ${
              isExiting ? "modal-exit" : "modal-enter"
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="px-3 py-2 text-white bg-red-600 border border-white rounded"
            >
              Close
            </button>
            <iframe
              className="mt-4 rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xKIA0QF1lO4?si=UQJDlb8hcBwrYZBH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button
          className="px-3 py-2 transition-all duration-200 bg-red-200 border border-gray-500 rounded hover:bg-red-500 hover:text-white"
          onClick={() => setShowModal(true)}
        >
          Watch Video
        </button>
      </div>
    </section>
  );
}

export default Modal;
