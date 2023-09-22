import { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import useData from "../../hooks/useMovieData";
import useSeatsData from "../../hooks/useSeatsData";

import { CURRENCY_LABEL, PAY_LABEL } from "../../common/labels";
import { removeSeat, selectSeats } from "../../actions";
import { getCheckoutPagePath, getDetailsPagePath } from "../../common/utils";

function useAllocate() {
  const {
    selectedTime,
    ticketCost,
    selectedSeats,
    selectedMovieId,
    getMovieDetails,
  } = useData();
  const { seatsData, loadingSeats } = useSeatsData(selectedTime);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = getMovieDetails(parseInt(selectedMovieId));

  const { name } = details;

  const seatsByRows = Object.entries(seatsData);

  const checkoutLabel = useMemo(() => {
    return `${PAY_LABEL} ${CURRENCY_LABEL}. ${
      ticketCost * (selectedSeats?.length || 0)
    }`;
  }, [selectedSeats?.length, ticketCost]);

  const onSeatClicked = (seatName) => {
    dispatch(selectSeats({ selectedSeats: seatName }));
  };

  const onRemoveSeatClicked = (seatName) => {
    dispatch(removeSeat(seatName));
  };

  const goBack = () => {
    dispatch(selectSeats({ selectedSeats: null }));
    navigate(getDetailsPagePath(params.movieId));
  };

  const onCheckoutClick = useCallback(() => {
    navigate(getCheckoutPagePath());
  }, [navigate]);

  useEffect(() => {
    if (!selectedTime) {
      goBack();
    }
  }, []);

  return {
    name: name,
    selectedTime: selectedTime,
    selectedSeats: selectedSeats,
    loadingSeats: loadingSeats,
    seatsByRows: seatsByRows,
    checkoutLabel: checkoutLabel,
    onSeatClicked: onSeatClicked,
    onRemoveSeatClicked: onRemoveSeatClicked,
    onCheckoutClick: onCheckoutClick,
    goBack: goBack,
  };
}

export default useAllocate;
