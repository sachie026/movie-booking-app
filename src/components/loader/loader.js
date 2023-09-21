import React from "react";

import { LoaderContainer } from "./styles";
import { LOADING_LABEL } from "../../common/labels";

function Loader() {
  return <LoaderContainer>{LOADING_LABEL}</LoaderContainer>;
}

export default Loader;
