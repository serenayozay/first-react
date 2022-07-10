import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const [search, setSearch] = useState(" ");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9f79133712223ff04d118c149d11677d&units=metric`
        );
        console.log(response);
        setCity(response.data); //gelen veriyi setcity atar
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);

  return (
    <div className="App">
      <div className="Search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Lokasyon Girin!"
        />
        {city && <City city={city} />} 
      </div>
    </div>
  );
}

export default App;
