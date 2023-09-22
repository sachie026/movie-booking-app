import React, { useEffect, useMemo } from "react";
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
  SELECTED_TIME_LABEL,
  CHECKOUT_PATH,
} from "../../common/labels";
import SeatsByRows from "./seats-by-rows";

import {
  AllocateContainer,
  AllocateTitle,
  CheckoutButton,
  SelectedTime,
} from "./styles";
import { formatAMPM } from "../../common/utils";

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
    navigate(`/details/${params.movieId}`);
  };

  const onCheckoutClick = () => {
    navigate(`checkout`);
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
        <SelectedTime>{`${SELECTED_TIME_LABEL} : ${formatAMPM(
          selectedTime
        )}`}</SelectedTime>
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

          <CheckoutButton
            onClick={onCheckoutClick}
            disabled={!selectedSeats?.length}
          >
            {checkoutLabel}
          </CheckoutButton>
        </AllocateContainer>
      </PageContent>
    </PageContainer>
  );
}

export default Checkout;
