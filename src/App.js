import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Components/Map";
import Nav from "./Components/Nav";
import CompaniesTable from "./Components/CompaniesTable";
import { Route, Routes } from "react-router-dom";
import { getAvailableSectors, getMinAndMaxFees } from "./utils";

function App() {
  const [companies, setCompanies] = useState([]);
  const [availableSectors, setAvailableSectors] = useState([]);
  const [minMaxFees, setMinMaxFees] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13")
      .then(({ data: companies }) => {
        setCompanies(companies);
        setAvailableSectors(getAvailableSectors(companies));
        setMinMaxFees(getMinAndMaxFees(companies));
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Map companies={companies} />} />
        <Route
          path="/table"
          element={
            <CompaniesTable
              companies={companies}
              availableSectors={availableSectors}
              minMaxFees={minMaxFees}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
