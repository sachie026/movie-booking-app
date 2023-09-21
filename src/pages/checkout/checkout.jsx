import React, { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";

import useData from "../../hooks/useMovieData";
import { TIMER } from "../../common/shared";
// import useSeatsData from "../../hooks/useSeatsData";
// import { selectSeats } from "../../actions";

// import useDetails from "./useDetails";

function Checkout() {
  // const navigate = useNavigate();
  const { selectedTime } = useData();
  // const { seatsData } = useSeatsData(selectedTime);

  const redirectBack = () => {};

  useEffect(() => {
    let timer = setTimeout(redirectBack, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>Checkout {selectedTime}</div>;
}

export default Checkout;
