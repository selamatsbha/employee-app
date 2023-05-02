import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import AddEmployeePage from './pages/AddEmployeePage';
import {Routes, Route} from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';



//functional component
//class component
//PascalCasing
//props is short for "properties", we use it to pass data from parent to child component and also pass functions.
//props are objects and they are read-only

const data = [
  {
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    fullName: "James King",
    title: "president and CEO",
    callOffice: "0838202389",
    callMobile: "30838480504",
    sms: "0385380387",
    email: "james@email.com"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    fullName: "Julie Taylor",
    title: "VP of markating",
    callOffice: "899034789",
    callMobile: "345678321",
    sms: "80938566800",
    email: "julie@email.com"
  },
  {
    image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    fullName: "Ray Moore",
    title: "Vp of sales",
    callOffice: "7845202389",
    callMobile: "20948480504",
    sms: "5715380387",
    email: "ray@email.com"
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    fullName: "Donell Khaled",
    title: "FE Web Developer",
    callOffice: "7845202389",
    callMobile: "20948480504",
    sms: "5715380387",
    email: "ray@email.com"
  },
]

const newEmployee = {
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
fullName: "Mike Min",
title: "BE Web Developer",
callOffice: "7845202389",
callMobile: "20948480504",
sms: "5715380387",
email: "mike@email.com"
};

function App() {
  const [employeeData, setEmployeeData] = useState(data);
  const [inputValue, setInputValue] = useState("");

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
      <Route path="/employee-list" element={< EmployeeListPage setInputValue={setInputValue} 
             employeeData={employeeData} 
             handleSearch = {handleSearch}/>} />
    </Routes>
  );
}

export default App;
