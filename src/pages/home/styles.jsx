import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS, SIZES } from "../../common/shared";

export const Title = styled.div`
  color: ${COLORS.white};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${SIZES.xxl};
`;

export const MoviesListView = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.xxl} ${SIZES.xl};
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 968px) {
    width: 75%;
  }
`;

export const MovieRowView = styled.div`
  padding: ${SIZES.xl};
  background: ${COLORS.white};
  border-radius: ${SIZES.xs};
  margin-bottom: ${SIZES.xs};
  width: 100%;
  font-size: ${SIZES.lg};
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
