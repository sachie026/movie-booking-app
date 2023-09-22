import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import useData from "../../hooks/useMovieData";
import {
  ActionButton,
  BackButton,
  PageContainer,
  PageContent,
  PageHeader,
  TIMER,
  Title,
} from "../../common/shared";
import { selectSeats } from "../../actions";
import { BackButtonContainer, CheckoutContainer } from "./styles";
import DataRow from "../../components/data-row";
import {
  MOVIE_LABEL,
  SELECTED_SEATS_LABEL,
  SELECTED_TIME_LABEL,
  GO_BACK_TO_ALLOCATE,
} from "../../common/labels";
// import useSeatsData from "../../hooks/useSeatsData";
// import { selectSeats } from "../../actions";

// import useDetails from "./useDetails";

function Checkout() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedTime, getMovieDetails, selectedSeats, selectedMovieId } =
    useData();
  const details = getMovieDetails(parseInt(selectedMovieId));

  const redirectBack = () => {
    dispatch(selectSeats({ selectedSeats: null }));
    navigate(`/details/${params.movieId}`);
  };

  const goBack = () => {
    navigate(`/details/${params.movieId}/allocate`);
  };

  useEffect(() => {
    if (!selectedTime) {
      redirectBack();
    }
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <Title>Checkout</Title>
      </PageHeader>

      <PageContent>
        <BackButtonContainer>
          <BackButton onClick={goBack}>{GO_BACK_TO_ALLOCATE}</BackButton>
        </BackButtonContainer>
        <CheckoutContainer>
          <DataRow label={MOVIE_LABEL} value={details?.name} />
          <DataRow label={SELECTED_TIME_LABEL} value={selectedTime} />
          <DataRow
            label={SELECTED_SEATS_LABEL}
            value={selectedSeats.join(",")}
          />
        </CheckoutContainer>

        <ActionButton> Proceed </ActionButton>
      </PageContent>
    </PageContainer>
  );
}

export default Checkout;
