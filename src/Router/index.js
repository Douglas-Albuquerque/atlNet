import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAtl from "../Components/Layout/LayoutAtl"
import HomePage from "../Pages/Home/HomePage";
import CreateEquip from "../Pages/CreateEquip/CreateEquip";



export default function RoutePage() {
  return (
    <Router>
      <LayoutAtl/>
    </Router>
  );
}