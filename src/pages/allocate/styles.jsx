import styled from "styled-components";
import { SIZES, COLORS, ActionButton } from "../../common/shared";

export const AllocateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.xxl} ${SIZES.xl};
  width: 50%;
  box-sizing: border-box;
`;

export const SeatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${SIZES.lg} 0px;
  justify-content: center;
  align-items: center;
`;

export const SeatCell = styled.div`
  background: ${(props) =>
    props.$isSeatSelected ? COLORS.green : COLORS.white};
  padding: ${SIZES.xs} ${SIZES.sm};
  margin-right: ${SIZES.md};
  border-radius: ${SIZES.xxs};
  cursor: pointer;
  color: ${(props) => (props.$isSeatSelected ? COLORS.white : COLORS.darkGray)};
`;

export const BookedSeatCell = styled(SeatCell)`
  background: ${COLORS.lightGray};
  border: 1px solid ${COLORS.darkGray};
  opacity: 0.5;
`;

export const RowLabel = styled.div`
  margin-right: ${SIZES.lg};
  font-weight: 600;
`;

export const AllocateTitle = styled.div`
  font-weight: 600;
  font-size: ${SIZES.md};
  margin-bottom: ${SIZES.xl};
`;

export const CheckoutButton = styled(ActionButton)`
  margin-top: ${SIZES.xxxl};
`;

export const SelectedTime = styled.div`
  margin-top: ${SIZES.lg};
  border-radius: ${SIZES.xxs};
  color: ${COLORS.green};
  background: ${COLORS.lightGray};
  padding: ${SIZES.xs} ${SIZES.sm};
  font-size: ${SIZES.sm};
  font-weight: 600;
`;
