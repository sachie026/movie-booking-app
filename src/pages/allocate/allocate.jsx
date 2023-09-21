import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import useData from "../../hooks/useMovieData";
import useSeatsData from "../../hooks/useSeatsData";
import { selectSeats } from "../../actions";

function Checkout() {
  const { selectedTime, ticketCost, selectedSeats } = useData();
  const { seatsData } = useSeatsData(selectedTime);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const seatsByRows = Object.entries(seatsData);

  const onSeatClicked = (seatName) => {
    dispatch(selectSeats({ selectedSeats: seatName }));
  };

  useEffect(() => {
    if (!selectedTime) {
      dispatch(selectSeats({ selectedSeats: null }));
      navigate(`/details/${params.movieId}`);
    }
  }, []);

  return (
    <div>
      Allocate
      {seatsByRows.map(([rowName, rowData], index) => {
        return (
          <div key={`row${index}`}>
            {rowName}
            {rowData.map((isAvialable, seatIndex) => {
              return (
                <div
                  key={`seat${seatIndex}`}
                  onClick={() =>
                    isAvialable && onSeatClicked(`${rowName}${seatIndex}`)
                  }
                >
                  {isAvialable ? "avialable" : "booked"}
                </div>
              );
            })}
          </div>
        );
      })}
      Ticket cost :{" "}
      <div>
        {selectedSeats}
        {ticketCost * (selectedSeats?.length || 0)}
      </div>
    </div>
  );
}

export default Checkout;
