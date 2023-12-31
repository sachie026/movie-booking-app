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

  @media (max-width: 1024px) {
    width: 75%;
  }
`;

export const BackButtonContainer = styled.div`
  width: 50%;
  margin: ${SIZES.xl} 0px;
`;

export const ExpireLabel = styled.div`
  font-size: ${SIZES.md};
  margin: ${SIZES.xxl} 0px;
  display: flex;
  align-items: center;
  background: ${COLORS.white};
  padding: ${SIZES.md};
  border-radius: ${SIZES.xs};
`;

export const SecondsLabel = styled.div`
  font-weight: 600;
  color: ${COLORS.red};
  font-size: ${SIZES.lg};
  padding: 0px ${SIZES.md};
`;
