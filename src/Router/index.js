import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import LayoutAtl from "../Components/Layout/LayoutAtl"

export default function RoutePage() {
  return (
    <Router>
      <LayoutAtl/>
    </Router>
  );
}