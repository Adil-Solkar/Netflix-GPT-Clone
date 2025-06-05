import { IMG_BASE_URL } from "../utils/constants";
const MovieCards = ({ posterPath }) => {
  return (
    <>
      <img
        src={IMG_BASE_URL + posterPath}
        alt="Movie Card"
        className="block w-45 flex-1"
      />
    </>
  );
};

export default MovieCards;
