// import axios from "axios";
// import { useEffect, useState } from "react";

// function Countries () {
//     const [countryData, setCountryData] = useState(null);
//     const [userInput, setUserInput] = useState("");
//     const [filteredCountry, setFilteredCountry] = useState([]);

//     async function getCountries () {
//         try {
//           const response = await axios.get("https://restcountries.com/v3.1/all");
//           const data = await response.data;
//           setCountryData(data)
//         } catch (error) {
//           console.log(error);
//         }
//       }

//   console.log("country data", countryData);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//    useEffect(() => {
//     if(countryData !== null) {
//         const filteredCountry = countryData.filter((country) => 
//         userInput === country.name.official
//         );
//         console.log("Filtered countries", filteredCountry);
//         console.log("User value", userInput);
//     }
//    }, []);

//   console.log("Filtered Countries", filteredCountry);

//     // if(countryData !== null){
//     //     setCountryData(countryData.filter((country) => {
//     //         return userInput === country.name.official;
//     //      }))
//     // }

//     return (
//        <>
//        <h2>Welcome to the world</h2>
//        <div>
//         <input type="text" name="" id="" onChange={handleChange} />
//        </div>
//        <div>
//     {countryData && countryData.map((country) => {
//     return (
//         <div>
//         <img src={country.flags.png} alt={country.flags.alt} />
//         <p>Name: {country.name.official} </p>
//         <p>Population: {country.population} </p>
//     </div>
//     );
// })}
       
//        </div>
//        </> 
//     );
// }

// export default Countries;