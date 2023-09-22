import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

import useData from "../../hooks/useMovieData";
import { selectMovieTiming } from "../../actions";
import { ALLOCATE_LABEL, HOME_PATH } from "../../common/labels";

function useDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getMovieDetails, selectedTime } = useData();
  const details = getMovieDetails(parseInt(params.movieId));

  const { name, description, director, timings, cost } = details;

  const onSlotClicked = (slot) => {
    const data = {
      selectedMovieId: params.movieId,
      selectedTime: slot,
      ticketCost: cost,
    };
    dispatch(selectMovieTiming(data));
  };

  const onBookClicked = () => {
    if (selectedTime) {
      navigate(ALLOCATE_LABEL);
    }
  };

  const onGoBackClicked = () => {
    // reset data before moving back
    const data = {
      selectedMovieId: null,
      selectedTime: null,
      ticketCost: null,
    };
    dispatch(selectMovieTiming(data));
    navigate(HOME_PATH);
  };

  return {
    name: name,
    description: description,
    director: director,
    timings: timings,
    cost: cost,
    selectedTime: selectedTime,
    onSlotClicked: onSlotClicked,
    onBookClicked: onBookClicked,
    onGoBackClicked: onGoBackClicked,
  };
}

export default useDetails;
