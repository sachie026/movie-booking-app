import React from "react";

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

export default DataRow;
