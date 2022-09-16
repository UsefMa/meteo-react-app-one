import axios from "axios";
import { useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "6cb9ddc54fa7efdea42797d58daaac2f";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  // fetch Data From API

  const searchLocation = (event) => {
    event.preventDefault();
    axios.get(URL).then((response) => {
      setData(response.data);
      //console.log(response.data);
    });
    setLocation("");
  };

  return (
    <div className="app">
      <div className="container">
        <form>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location or City.."
            type="text"
          />
          <button onClick={searchLocation}>Search</button>
        </form>
        <div className="info">
          <div
            className="country"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="name"> {data.name} </h1>
            {data.sys ? (
              <h1 style={{ fontSize: "1rem" ,color:"pink"}}>( {data.sys.country} )</h1>
            ) : null}
          </div>
          {data.main ? <h2 className="temp"> {data.main.temp} C°</h2> : null}
          <div className="flex">
            {data.weather ? (
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
            ) : null}

            {data.weather ? <h1> {data.weather[0].main} </h1> : null}
          </div>

          {data.weather ? (
            <h1 className="desc"> {data.weather[0].description} </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
