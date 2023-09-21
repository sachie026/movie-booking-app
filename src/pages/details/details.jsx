import React from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import DataRow from "./data-row";
import ShowTimings from "./show-timings";

import useData from "../../hooks/useMovieData";
import { selectMovieTiming } from "../../actions";

import {
  PageContainer,
  PageContent,
  PageHeader,
  Title,
} from "../../common/shared";
import { MovieDetails, Description, BookButton, BackButton } from "./styles";
import {
  DIRECTOR_LABEL,
  TICKET_COST_LABEL,
  BOOK_BUTTON,
  ALLOCATE_LABEL,
  HOME_PATH,
  CURRENCY_LABEL,
  GO_BACK_TO_LIST,
} from "../../common/labels";

function Details() {
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

  return (
    <PageContainer>
      <PageHeader>
        <Title>{name}</Title>
      </PageHeader>

      <PageContent>
        <MovieDetails>
          <BackButton onClick={onGoBackClicked}>{GO_BACK_TO_LIST}</BackButton>
          <Description>{description}</Description>
          <DataRow label={DIRECTOR_LABEL} value={director} />
          {!!cost && (
            <DataRow
              label={TICKET_COST_LABEL}
              value={`${cost}${CURRENCY_LABEL}`}
            />
          )}
        </MovieDetails>

        <ShowTimings timings={timings} onSlotClicked={onSlotClicked} />
        <BookButton onClick={onBookClicked} disabled={!selectedTime}>
          {BOOK_BUTTON}
        </BookButton>
      </PageContent>
    </PageContainer>
  );
}

export default Details;
