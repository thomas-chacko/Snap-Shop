import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Error({ children }) {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          {children}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link
            to={"/"}
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <FaArrowCircleLeft size={16} className="mr-2" />
            Go back
          </Link>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
