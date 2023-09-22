import React from "react";

import DataRow from "../../components/data-row";
import ShowTimings from "./show-timings";

import {
  PageContainer,
  PageContent,
  PageHeader,
  Title,
  BackButton,
  ActionButton,
} from "../../common/shared";
import { MovieDetails, Description } from "./styles";
import {
  DIRECTOR_LABEL,
  TICKET_COST_LABEL,
  BOOK_BUTTON,
  CURRENCY_LABEL,
  GO_BACK_TO_LIST,
} from "../../common/labels";
import useDetails from "./useDetails";

function Details() {
  const {
    name,
    description,
    director,
    timings,
    cost,
    selectedTime,
    onSlotClicked,
    onBookClicked,
    onGoBackClicked,
  } = useDetails();

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

          <ShowTimings timings={timings} onSlotClicked={onSlotClicked} />
          <ActionButton onClick={onBookClicked} disabled={!selectedTime}>
            {BOOK_BUTTON}
          </ActionButton>
        </MovieDetails>
      </PageContent>
    </PageContainer>
  );
}

export default Details;
