import React from "react";
import { PropTypes } from "prop-types";

import { TimingsDetails, Slot, TimingsLabel } from "./styles";
import { formatAMPM } from "../../common/utils";
import useData from "../../hooks/useMovieData";
import { SHOW_TIMING_LABEL } from "../../common/labels";

function ShowTimings(props) {
  const { timings, onSlotClicked } = props;
  const { selectedTime } = useData();

  return (
    <>
      <TimingsLabel>{SHOW_TIMING_LABEL}</TimingsLabel>
      <TimingsDetails>
        {timings?.map((slot, index) => {
          return (
            <Slot
              key={`slot-${index}`}
              selected={selectedTime === slot}
              onClick={() => onSlotClicked(slot)}
            >
              {formatAMPM(slot)}
            </Slot>
          );
        })}
      </TimingsDetails>
    </>
  );
}

ShowTimings.propTypes = {
  timings: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSlotClicked: PropTypes.func,
};

export default ShowTimings;
