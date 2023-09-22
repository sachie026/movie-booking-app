import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

import useData from "../../hooks/useMovieData";
import { selectSeats } from "../../actions";
import { getAllocatePagePath, getDetailsPagePath } from "../../common/utils";
import { CURRENCY_LABEL } from "../../common/labels";

function useCheckout() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    selectedTime,
    getMovieDetails,
    selectedSeats,
    selectedMovieId,
    ticketCost,
  } = useData();
  const details = getMovieDetails(parseInt(selectedMovieId));
  const { name } = details;

  const totalCost = useMemo(() => {
    return `${CURRENCY_LABEL}. ${ticketCost * (selectedSeats?.length || 0)}`;
  }, [selectedSeats?.length, ticketCost]);

  const redirectBack = () => {
    dispatch(selectSeats({ selectedSeats: null }));
    navigate(getDetailsPagePath(params.movieId));
  };

  const goBack = () => {
    navigate(getAllocatePagePath(params.movieId));
  };

  useEffect(() => {
    if (!selectedTime) {
      redirectBack();
    }
  }, []);

  return {
    name: name,
    selectedTime: selectedTime,
    selectedSeats: selectedSeats,
    totalCost: totalCost,
    goBack: goBack,
    redirectBack: redirectBack,
  };
}

export default useCheckout;
