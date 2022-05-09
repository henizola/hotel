import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v2/search",
    params: { query: "Addis Ababa", locale: "en_US", currency: "USD" },
    headers: {
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      "X-RapidAPI-Key": "91c56bff46msha70642b4be2f89fp1d85c2jsn2f65c23ca322",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
