import './App.css';
import HomePage from './components/HomePage/HomePage';
import EmployeePage from './components/EmployeePage/EmployeePage';
import NavBar from './components/NavBar/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee/AddEmployee';

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

  const handleAddEmployee = () => {
    setEmployeeData([...data, newEmployee])
  }
  return (
    <div className="App">
      <NavBar />
      <Wrapper>
         <HomePage 
           setInputValue={setInputValue} 
           employeeData={employeeData} 
           handleSearch = {handleSearch} 
           />
         <EmployeePage employeeData={employeeData} />
      </Wrapper>
      <button onClick = {handleAddEmployee}>Add Employee</button>
      <AddEmployee employeeData={employeeData} setEmployeeData={setEmployeeData} />
    </div>
    
  );
}

export default App;
