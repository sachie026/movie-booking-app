import React from "react";
import { PropTypes } from "prop-types";
import { SeatCell, BookedSeatCell } from "./styles";

function Seat(props) {
  const {
    isAvailable,
    onSeatClicked,
    seatIndex,
    rowIndex,
    isSelected,
    onRemoveSeatClicked,
  } = props;

  const handleSeatClick = () => {
    if (isSelected) {
      onRemoveSeatClicked(`row${rowIndex}${seatIndex}`);
    } else {
      onSeatClicked(`row${rowIndex}${seatIndex}`);
    }
  };

  return isAvailable ? (
    <SeatCell isSelected={isSelected} onClick={handleSeatClick}>
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
  isSelected: PropTypes.bool.isRequired,
};

export default Seat;
