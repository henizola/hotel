import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExternalStateExample from "./Components/Map/map";

import HomePage from "./Home/Home.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
