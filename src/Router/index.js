import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutAtl from "../Components/Layout/LayoutAtl";
import { Login } from "../Pages/Login/Login";
import Contracts from "../Pages/Contracts/Contracts";
import SearchPage from "../Pages/Search/SearchPage";
import {CreateEquip} from "../Pages/CreateEquip/CreateEquip";
import Equipaments from "../Pages/Equipaments/Equipaments";
import "../Components/Layout/LayoutAtl"

const RoutePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<LayoutAtl />}>
          <Route index element={<Contracts />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="createequip" element={<CreateEquip />} />
          <Route path="equipamentos/:item" element={<Equipaments />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutePage;
