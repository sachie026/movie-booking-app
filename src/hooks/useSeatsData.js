import { useEffect, useState } from "react";

import { fetchSeats } from "../common/data";

function useSeatsData(selectedTime) {
  const [seatsData, setSeatsData] = useState([]);
  const [loadingSeats, setLoadingSeats] = useState(false);

  const getSeats = async () => {
    try {
      setLoadingSeats(true);
      const seats = await fetchSeats();
      setSeatsData({ ...seats });
      setLoadingSeats(false);
    } catch (e) {
      setLoadingSeats(false);
    }
  };

  useEffect(() => {
    if (selectedTime) {
      getSeats();
    }
  }, []);

  return {
    seatsData: seatsData,
    loadingSeats: loadingSeats,
  };
}

export default useSeatsData;
