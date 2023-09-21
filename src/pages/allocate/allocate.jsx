import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import useData from "../../hooks/useMovieData";
import useSeatsData from "../../hooks/useSeatsData";
import { selectSeats, removeSeat } from "../../actions";
import {
  PageContainer,
  PageContent,
  PageHeader,
  Title,
  BackButton,
} from "../../common/shared";
import {
  SELECT_SEATS_LABEL,
  GO_BACK_TO_DETAILS,
  PAY_LABEL,
  CURRENCY_LABEL,
} from "../../common/labels";
import SeatsByRows from "./seats-by-rows";
import { AllocateContainer, AllocateTitle, CheckoutButton } from "./styles";

function Checkout() {
  const {
    selectedTime,
    ticketCost,
    selectedSeats,
    selectedMovieId,
    getMovieDetails,
  } = useData();
  const { seatsData } = useSeatsData(selectedTime);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = getMovieDetails(parseInt(selectedMovieId));

  const { name } = details;

  const seatsByRows = Object.entries(seatsData);

  const onSeatClicked = (seatName) => {
    dispatch(selectSeats({ selectedSeats: seatName }));
  };

  const onRemoveSeatClicked = (seatName) => {
    dispatch(removeSeat(seatName));
  };

  const goBack = () => {
    dispatch(selectSeats({ selectedSeats: null }));
    navigate(`/details/${params.movieId}`);
  };

  useEffect(() => {
    if (!selectedTime) {
      goBack();
    }
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <Title>{name}</Title>
      </PageHeader>

      <PageContent>
        <AllocateContainer>
          <BackButton onClick={goBack}>{GO_BACK_TO_DETAILS}</BackButton>
          <AllocateTitle>{SELECT_SEATS_LABEL}</AllocateTitle>
          {seatsByRows.map(([_rowName, rowData], index) => {
            return (
              <SeatsByRows
                index={index}
                onSeatClicked={onSeatClicked}
                onRemoveSeatClicked={onRemoveSeatClicked}
                rowData={rowData}
              />
            );
          })}
          <CheckoutButton disabled={!selectedSeats?.length}>
            {`${PAY_LABEL} ${CURRENCY_LABEL}. ${
              ticketCost * (selectedSeats?.length || 0)
            }`}
          </CheckoutButton>
        </AllocateContainer>
      </PageContent>
    </PageContainer>
  );
}

export default Checkout;
