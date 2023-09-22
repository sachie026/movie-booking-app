import {
  SEAT_INFO_AVAILABLE,
  SEAT_INFO_BOOKED,
  SEAT_INFO_SELECTED,
} from "../../common/labels";
import { BookedSeatCell, SeatCell, SeatInfo, Space } from "./styles";

function SeatCellInfo() {
  return (
    <SeatInfo>
      <SeatCell /> {SEAT_INFO_AVAILABLE}
      <Space />
      <BookedSeatCell /> {SEAT_INFO_BOOKED}
      <Space />
      <SeatCell $isSeatSelected /> {SEAT_INFO_SELECTED}
    </SeatInfo>
  );
}

export default SeatCellInfo;
