import { Link } from "react-router-dom";
import animation from "../assets/Animation.gif";

const OederPlaced = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col gap-5 justify-center items-center">
      <img src={animation} alt="animmationimage" />
      <div>
        <Link className="bg-green-600 text-white px-4 py-1 rounded-md" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};
export default OederPlaced;
