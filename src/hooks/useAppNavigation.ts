import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  const goMain = () => navigate("/");
  const goFavourites = () => navigate("/favourites");
  const goRating = () => navigate("/rating");

  return { goMain, goFavourites, goRating };
};

export default useAppNavigation;
