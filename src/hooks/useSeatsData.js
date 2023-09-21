import { useEffect, useState } from "react";

import { fetchSeats } from "../common/data";

function useSeatsData(selectedTime) {
  const [seatsData, setSeatsData] = useState([]);

  const getSeats = async () => {
    try {
      console.log("fetch getSeats");
      const seats = await fetchSeats();
      setSeatsData({ ...seats });
    } catch (e) {
      return {};
    }
  };

  useEffect(() => {
    if (selectedTime) {
      getSeats();
    }
  }, []);

  return {
    seatsData: seatsData,
  };
}

export default useSeatsData;
