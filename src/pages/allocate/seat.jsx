import React from "react";
import { PropTypes } from "prop-types";
import { SeatCell, BookedSeatCell } from "./styles";

function Seat(props) {
  const {
    isAvailable,
    onSeatClicked,
    seatIndex,
    rowIndex,
    isSeatSelected,
    onRemoveSeatClicked,
  } = props;

  const handleSeatClick = () => {
    if (isSeatSelected) {
      onRemoveSeatClicked(`row${rowIndex}${seatIndex}`);
    } else {
      onSeatClicked(`row${rowIndex}${seatIndex}`);
    }
  };

  return isAvailable ? (
    <SeatCell $isSeatSelected={isSeatSelected} onClick={handleSeatClick}>
      {seatIndex}
    </SeatCell>
  ) : (
    <BookedSeatCell> {seatIndex}</BookedSeatCell>
  );
}

Seat.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  onSeatClicked: PropTypes.func.isRequired,
  onRemoveSeatClicked: PropTypes.func.isRequired,
  rowIndex: PropTypes.number.isRequired,
  seatIndex: PropTypes.number.isRequired,
  isSeatSelected: PropTypes.bool.isRequired,
};

export default React.memo(Seat);
