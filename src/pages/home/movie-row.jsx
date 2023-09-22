import React from "react";
import { PropTypes } from "prop-types";

import { MovieRowView, MovieLink } from "./styles";
import { getDetailsPagePath } from "../../common/utils";

function MovieRow(Props) {
  const { id, name } = Props;

  return (
    <MovieRowView>
      <MovieLink to={getDetailsPagePath(id)}>{name}</MovieLink>
    </MovieRowView>
  );
}

MovieRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MovieRow;
