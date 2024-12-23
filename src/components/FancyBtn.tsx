import { useRef } from "react";
function FancyBtn() {
  const btnRef = useRef<HTMLAnchorElement>(null!);
  const bgRef = useRef<HTMLSpanElement>(null!);

  const handleOrigin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const bg = bgRef.current;
    const btn = btnRef.current;

    if (bg && btn) {
      bg.style.left = `${e.pageX - btn.offsetLeft}px`;
      bg.style.top = `${e.pageY - btn.offsetTop}px`;
    }
  };

  const handleTranslate = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const translateX = (x - width / 2) / 2;
    const translateY = (y - height / 2) / 2;
    btn.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };
  const resetTranslate = () => {
    const btn = btnRef.current;
    btn.style.transition = "transform 0.5s ease-out";
    btn.style.transform = "translate(0, 0)";
  };
  return (
    <div className="container">
      <a
        ref={btnRef}
        className="btn group relative p-6 overflow-hidden cursor-pointer w-[160px] h-[160px] border border-black rounded-full flex gap-1 items-center justify-center transition-transform duration-500 ease-in-out"
        onMouseMove={(e) => {
          handleOrigin(e);
          handleTranslate(e);
        }}
        onMouseLeave={resetTranslate}
      >
        <div className="flex group-hover:!text-white label  relative font-bold uppercase transition-colors duration-300 ease-in-out label z-[1]">
          <span className="">
            See All <br /> blog post
          </span>
          <svg
            className="group-hover:!fill-white"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"
            ></path>
          </svg>
        </div>
        <span
          ref={bgRef}
          className="bg group-hover:-translate-y-1/2 group-hover:-translate-x-1/2 group-hover:scale-100 absolute top-0 left-0 min-w-[250%] min-h-[250%] rounded-full aspect-square opacity-100 bg-black -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-in-out"
        ></span>
      </a>
    </div>
  );
}
export default FancyBtn;
