import React, { useMemo } from "react";
import { PropTypes } from "prop-types";

import Seat from "./seat";
import { SeatsRow, RowLabel } from "./styles";
import { ROW_LABEL } from "../../common/labels";
import useData from "../../hooks/useMovieData";

function SeatsByRows(props) {
  const { selectedSeats } = useData();
  const { index, rowData, onSeatClicked, onRemoveSeatClicked } = props;

  const rowLabel = useMemo(() => {
    return `${ROW_LABEL} ${index + 1}`;
  }, [index]);

  return (
    <>
      <SeatsRow>
        <RowLabel>{rowLabel}</RowLabel>

        {rowData.map((isAvailable, seatIndex) => {
          return (
            <Seat
              key={`seat${seatIndex}`}
              onSeatClicked={onSeatClicked}
              onRemoveSeatClicked={onRemoveSeatClicked}
              isAvailable={isAvailable}
              seatIndex={seatIndex}
              rowIndex={index}
              isSeatSelected={selectedSeats?.includes(
                `row${index}${seatIndex}`
              )}
            />
          );
        })}
      </SeatsRow>
    </>
  );
}

SeatsByRows.propTypes = {
  index: PropTypes.number.isRequired,
  rowData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onSeatClicked: PropTypes.func,
  onRemoveSeatClicked: PropTypes.func,
};

export default SeatsByRows;
