import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Components/Map";
import Nav from "./Components/Nav";
import CompaniesTable from "./Components/CompaniesTable";
import { Route, Routes } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13")
      .then(({ data: companies }) => {
        setCompanies(companies);
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Map companies={companies} />} />
        <Route path="/table" element={<CompaniesTable />} />
      </Routes>
    </div>
  );
}

export default App;
