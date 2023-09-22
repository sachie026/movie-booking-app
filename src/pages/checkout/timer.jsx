import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import {
  INTERVAL_VALUE,
  TIMER_START_COUNTER,
  TIMOUT_VALUE,
} from "../../common/shared";
import { SECONDS, TIMEOUT_MESSAGE } from "../../common/labels";
import { ExpireLabel, SecondsLabel } from "./styles";

function Timer(props) {
  const { onTimerEnd } = props;
  const [counter, setCounter] = useState(TIMER_START_COUNTER);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, INTERVAL_VALUE);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      onTimerEnd();
    }, TIMOUT_VALUE);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ExpireLabel>
      {TIMEOUT_MESSAGE}
      <SecondsLabel>{counter}</SecondsLabel> {SECONDS}
    </ExpireLabel>
  );
}

Timer.propTypes = {
  onTimerEnd: PropTypes.func,
};

export default Timer;
