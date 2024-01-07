import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Rating = ({ rating, totalreviews }) => {
  return (
    <div className="flex items-center">
      <span className="text-green-600">
        {rating >= 1 ? (
          <FaStar />
        ) : rating >= 0.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="text-green-600">
        {rating >= 2 ? (
          <FaStar />
        ) : rating >= 1.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="text-green-600">
        {rating >= 3 ? (
          <FaStar />
        ) : rating >= 2.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="text-green-600">
        {rating >= 4 ? (
          <FaStar />
        ) : rating >= 3.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="text-green-600">
        {rating >= 5 ? (
          <FaStar />
        ) : rating >= 4.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="pl-1 text-gray-600 text-sm">{rating}</span>

      <span className="pl-5 text-gray-600 text-sm">{totalreviews} Reviews</span>
    </div>
  );
};
export default Rating;
