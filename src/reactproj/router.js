import { HashRouter, Routes, Route } from "react-router-dom";

import MyFirstProj from "./my first proj";
import Business from "./business";
import Help from "./help";
import Login from "./login";
import Converter from "./currency converter";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MyFirstProj />} />
        <Route path="/business" element={<Business />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
