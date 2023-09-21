import React from "react";
import { PropTypes } from "prop-types";

import { DetailsRow, DetailsLabel } from "./styles";

function DataRow(props) {
  const { label, value } = props;
  return !value ? null : (
    <DetailsRow>
      <DetailsLabel>{label}</DetailsLabel>
      <div>{value}</div>
    </DetailsRow>
  );
}

DataRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DataRow;
