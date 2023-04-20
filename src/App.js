import './App.css';
import HomePage from './components/HomePage/HomePage';
import EmployeePage from './components/EmployeePage/EmployeePage';
import NavBar from './components/NavBar/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import { useState } from 'react';

//functional component
//class component
//PascalCasing
//props is short for "properties", we use it to pass data from parent to child component and also pass functions.
//props are objects and they are read-only

const data = [
  {
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "James King",
    title: "president and CEO",
    callOffice: "0838202389",
    callMobile: "30838480504",
    sms: "0385380387",
    email: "james@email.com"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Julie Taylor",
    title: "VP of markating",
    callOffice: "899034789",
    callMobile: "345678321",
    sms: "80938566800",
    email: "julie@email.com"
  },
  {
    image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Ray Moore",
    title: "Vp of sales",
    callOffice: "7845202389",
    callMobile: "20948480504",
    sms: "5715380387",
    email: "ray@email.com"
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Donell Khaled",
    title: "FE Web Developer",
    callOffice: "7845202389",
    callMobile: "20948480504",
    sms: "5715380387",
    email: "ray@email.com"
  },
]

const newEmployee = {
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
name: "Mike Min",
title: "BE Web Developer",
callOffice: "7845202389",
callMobile: "20948480504",
sms: "5715380387",
email: "mike@email.com"
};

function App() {
  const [employeeData, setEmployeeData] = useState(data);

  const handleAddEmployee = () => {
    setEmployeeData([...data, newEmployee])
  }
  return (
    <div className="App">
      <NavBar />
      <Wrapper>
         <HomePage employeeData={employeeData} />
         <EmployeePage employeeData={employeeData} />
      </Wrapper>
      <button onClick = {handleAddEmployee}>Add Employee</button>
    </div>
    
  );
}

export default App;
