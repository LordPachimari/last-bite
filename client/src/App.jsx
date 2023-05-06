import { RestaurantDashboard } from "./dashboard/restaurant";
import { CompanyDashboard } from "./dashboard/company";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuItem from "./components/menuItem";
import Marketplace from "./marketplace/Marketplace"

export default function App() {
  console.log("sefjsoefj");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<RestaurantDashboard />} />

        <Route path="/companyDashboard" element={<CompanyDashboard />} />

        <Route path="/dashboard/pho" element={<MenuItem />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}
