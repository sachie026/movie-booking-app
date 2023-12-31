import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./pages/home";
import Details from "./pages/details";
import Allocate from "./pages/allocate";
import {
  ALLOCATE_PATH,
  CHECKOUT_PATH,
  DETAILS_PATH,
  HOME_PATH,
} from "./common/labels";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={DETAILS_PATH} element={<Details />} />
          <Route path={ALLOCATE_PATH} element={<Allocate />} />
          <Route path={CHECKOUT_PATH} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
