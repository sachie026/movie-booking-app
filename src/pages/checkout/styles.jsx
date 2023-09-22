import styled from "styled-components";
import { COLORS, SIZES } from "../../common/shared";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.xxl} ${SIZES.xl};
  width: 50%;
  box-sizing: border-box;
  background: ${COLORS.white};
  margin-bottom: ${SIZES.xxl};
  border-radius: ${SIZES.xs};
`;

export const BackButtonContainer = styled.div`
  width: 50%;
  margin: ${SIZES.xl} 0px;
`;
