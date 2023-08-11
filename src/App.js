import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import Showcase from "./components/Showcase/showcase";
import Card from "./components/Cards/card";
import History from "./components/History/history";
import Material from "./components/Material/material";
import Home from "./Pages/Home/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontSize: "45px",
                }}
              >
                404 Not Found
              </h1>
            }
          />
          <Route path="showcase" element={<Showcase />} />
          <Route path="card" element={<Card />} />
          <Route path="history" element={<History />} />
          <Route path="material" element={<Material />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
