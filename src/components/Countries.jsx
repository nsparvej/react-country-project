import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlag,setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = country => {
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags =  flag => {
    console.log('flag adding');
    const newFlagAdding = [...visitedFlag,flag]
    setVisitedFlag(newFlagAdding);
  }

  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      {/* visited countries */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div>
        {
          visitedFlag.map(flag => <img className="img-container" src={flag}></img>)
        }
      </div>
      {/* display countries */}
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
