import { PropTypes } from "prop-types";
import styled from "styled-components";

export const TIMOUT_VALUE = 10000;
export const INTERVAL_VALUE = 1000;
export const TIMER_START_COUNTER = 10;

// API urls
export const MOVIES_URL =
  "https://run.mocky.io/v3/124f31cc-70e2-4576-bc55-346289417a2e";
export const SEATS_URL =
  "https://run.mocky.io/v3/09827575-b665-4f2f-ac9c-71a78a55d677";

// Color codes
export const COLORS = {
  lightGray: "#e0e0e0",
  darkGray: "#202020",
  black: "#000",
  white: "#fff",
  green: "#1f957c",
  red: "#f84464",
  blue: "#1e8bc3",
};

// Sizes
export const SIZES = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "36px",
  xxxl: "48px",
};

// Styles
export const PageContainer = styled.div`
  background: ${COLORS.lightGray};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageHeader = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${COLORS.darkGray};
  color: ${COLORS.white};
`;

export const PageContent = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${SIZES.xxl};
`;

export const BackButton = styled.div`
  margin-bottom: ${SIZES.xxl};
  color: ${COLORS.blue};
  font-weight: 600;
  cursor: pointer;
`;

export const ActionButton = styled.button`
  padding: ${SIZES.sm} ${SIZES.lg};
  border-radius: ${SIZES.xs};
  border: 0;
  background: ${COLORS.red};
  color: ${COLORS.white};
  font-size: ${SIZES.lg};
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

// Movie interface
export const movieType = {
  handleMovieClick: PropTypes.func,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  timings: PropTypes.arrayOf(PropTypes.string).isRequired,
  cost: PropTypes.number.isRequired,
};
