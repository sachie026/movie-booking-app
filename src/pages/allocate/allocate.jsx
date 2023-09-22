import React from "react";

import SeatsByRows from "./seats-by-rows";
import Loader from "../../components/loader";

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
  SELECTED_TIME_LABEL,
} from "../../common/labels";

import {
  AllocateContainer,
  AllocateTitle,
  CheckoutButton,
  SelectedTime,
} from "./styles";
import { formatAMPM } from "../../common/utils";
import useAllocate from "./useAllocate";
import SeatCellInfo from "./seatCellInfo";

function Allocate() {
  const {
    name,
    selectedTime,
    selectedSeats,
    loadingSeats,
    seatsByRows,
    checkoutLabel,
    onSeatClicked,
    onRemoveSeatClicked,
    onCheckoutClick,
    goBack,
  } = useAllocate();

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

          {loadingSeats ? (
            <Loader />
          ) : (
            seatsByRows.map(([_rowName, rowData], index) => {
              return (
                <SeatsByRows
                  key={`row${index}`}
                  index={index}
                  onSeatClicked={onSeatClicked}
                  onRemoveSeatClicked={onRemoveSeatClicked}
                  rowData={rowData}
                />
              );
            })
          )}

          <SeatCellInfo />

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

export default Allocate;
