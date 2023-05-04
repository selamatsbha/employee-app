import './App.css';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import AddEmployeePage from './pages/AddEmployeePage';
import {Routes, Route} from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';



//functional component
//class component
//PascalCasing
//props is short for "properties", we use it to pass data from parent to child component and also pass functions.
//props are objects and they are read-only


function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(true);

  const apiUrl = "https://lit-dusk-21328.herokuapp.com/api/employees/allemployees"

  const getAllEmployees = async () => {
    fetch(apiUrl).then((response) => {
      if (!response) {
        throw new Error ("Error: something went wrong")
      }
       return response.json()
   }).then((data) => {
       console.log("data", data)
       setEmployeeData(data)
   }).catch((error) => {
      setError("Oh something went wrong please try again later. ");
   });
  }

  useEffect(() => {
    getAllEmployees ()
  }, [error]);

  console.log("employeeData", employeeData); // []
  console.log("error", error); // false

  const handleSearch = () => {
    const filteredData = employeeData.filter(({ name }) => {
       return name === inputValue
    });
    console.log('Filtered data', filteredData)
    setEmployeeData(filteredData);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="add-employee" element={
          <AddEmployeePage 
             employeeData={employeeData} 
             setEmployeeData={setEmployeeData}/>} />
      <Route path="/employee-list" element={< EmployeeListPage error={error} setInputValue={setInputValue} 
             employeeData={employeeData} 
             handleSearch = {handleSearch}/>} />
    </Routes>
  );
}

export default App;
