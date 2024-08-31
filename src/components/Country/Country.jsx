import { useState } from "react";
import "./country.css";

const Country = ({ country ,handleVisitedCountry,handleVisitedFlags }) => {
  // eslint-disable-next-line react/prop-types
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  
    
  

  return (
    <div className={`country ${ visited && `visited`}` }>
      <h4 style={{color: visited ? 'purple' : 'white'}}> {name?.common}</h4>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>code: {cca3}</p>
      <button onClick={() =>{handleVisitedCountry(country)} } style={{margin:'5px'}}>Mark Visited</button> <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
      <button onClick={handleVisited}>Visited</button>
      {visited && "  i have visited this country"}
    </div>
  );
};

export default Country;
