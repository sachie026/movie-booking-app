import styled from "styled-components";

import { COLORS, SIZES } from "../../common/shared";

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.xxl} ${SIZES.xl};
  width: 50%;
  box-sizing: border-box;
`;

export const Description = styled.div`
  font-weight: 600;
  font-size: ${SIZES.lg};
  margin-bottom: ${SIZES.xl};
`;

export const TimingsDetails = styled.div`
  padding: ${SIZES.xxl} 0px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const Slot = styled.div`
  background: ${(props) => (props.selected ? COLORS.green : COLORS.white)};
  padding: ${SIZES.sm} ${SIZES.md};
  border: 1 solid
    ${(props) => (props.selected ? COLORS.green : COLORS.darkGray)};
  margin-bottom: ${SIZES.xs};
  margin-right: ${SIZES.xs};
  border-radius: ${SIZES.xs};
  cursor: pointer;
  color: ${(props) => (props.selected ? COLORS.white : COLORS.darkGray)};
`;

export const TimingsLabel = styled.label`
  font-weight: 600;
  margin-top: ${SIZES.xxxl};
`;
