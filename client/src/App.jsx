import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Formname from "./components/form/Formname";
import Text from "./components/text1/Text";
import Moneybutton from "./components/moneybutton/Moneybutton";
import ProductSelection from "./components/product/ProductSelection";
import CookieBanner from "./components/cookie/CookieBanner";
import Cookies from "./components/cookies/Cookies";
import Article1 from "./components/article/Article1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className="left-panel"></div>
              <div className="center-panel">
                <Text />
                <Moneybutton />
                <CookieBanner />
                <Formname />
              </div>
              <div className="right-panel"></div>
            </div>
          }
        />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Article1" element={<Article1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
