//import
//create context
//create provider
import React, {useState, useEffect} from "react";
import axios from 'axios';

// Create the context
export const EmployeeContext = React.createContext();

// Create a provider component
export const EmployeeProvider = (props) => {
    const [employeeData, setEmployeeData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    const apiUrl = "https://lit-dusk-21328.herokuapp.com/api/employees/allemployees"
  
    // const getAllEmployees = async () => {
    //   fetch(apiUrl).then((response) => {
    //     if (!response) {
    //       throw new Error ("Error: something went wrong")
    //     }
    //      return response.json()
    //  }).then((data) => {
    //      console.log("data", data)
    //      setEmployeeData(data)
    //  }).catch((error) => {
    //     setError("Oh something went wrong please try again later. ");
    //  });
    // }
  
    async function getEmployee () {
      try {
        const response = await axios.get(apiUrl);
        const data = await response.data;
        setEmployeeData(data);
        console.log('data', data);
      } catch (error) {
        setIsError(true);
      }
    }
  
    useEffect(() => {
      getEmployee ()
    }, []);
  
    console.log("employeeData", employeeData); // []
    console.log("error", isError); // false
  
    const handleSearch = () => {
      const filteredData = employeeData.filter(({ name }) => {
         return name === inputValue
      });
      console.log('Filtered data', filteredData)
      setEmployeeData(filteredData);
    };
  return (
    <EmployeeContext.Provider value={{employeeData, setEmployeeData, inputValue, setInputValue, isError, setIsError, isLoading, setIsLoading, handleSearch}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

