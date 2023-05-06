import { RestaurantDashboard } from "./dashboard/restaurant";
import { CompanyDashboard } from "./dashboard/company";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuItem from "./components/menuItem";
export default function App() {
  console.log("sefjsoefj");
  return (
<<<<<<< HEAD
    <>
      <h1>Welcome to LASTBITE</h1
      <FoodItem />
    </>
  )
}
=======
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<RestaurantDashboard />} />

        <Route path="/companyDashboard" element={<CompanyDashboard />} />

        <Route path="/dashboard/pho" element={<MenuItem />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> b8a8da1d09cd5b7bb97ad06291edef4b0727ffff
