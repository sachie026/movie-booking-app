import React from "react";

import DataRow from "../../components/data-row";

import {
  ActionButton,
  BackButton,
  PageContainer,
  PageContent,
  PageHeader,
  Title,
} from "../../common/shared";
import { BackButtonContainer, CheckoutContainer } from "./styles";
import {
  MOVIE_LABEL,
  SELECTED_SEATS_LABEL,
  SELECTED_TIME_LABEL,
  GO_BACK_TO_ALLOCATE,
  CHECKOUT_LABEL,
  PROCEED_LABEL,
  TICKET_COST_LABEL,
} from "../../common/labels";

import useCheckout from "./useCheckout";
import Timer from "./timer";

function Checkout() {
  const { name, selectedSeats, selectedTime, totalCost, goBack, redirectBack } =
    useCheckout();

  return (
    <PageContainer>
      <PageHeader>
        <Title>{CHECKOUT_LABEL}</Title>
      </PageHeader>

      <PageContent>
        <BackButtonContainer>
          <BackButton onClick={goBack}>{GO_BACK_TO_ALLOCATE}</BackButton>
        </BackButtonContainer>
        <CheckoutContainer>
          <DataRow label={MOVIE_LABEL} value={name} />
          <DataRow label={SELECTED_TIME_LABEL} value={selectedTime} />
          <DataRow
            label={SELECTED_SEATS_LABEL}
            value={selectedSeats.join(", ")}
          />
          <DataRow label={TICKET_COST_LABEL} value={totalCost} />
        </CheckoutContainer>

        <Timer onTimerEnd={redirectBack} />

        <ActionButton> {PROCEED_LABEL} </ActionButton>
      </PageContent>
    </PageContainer>
  );
}

export default Checkout;
