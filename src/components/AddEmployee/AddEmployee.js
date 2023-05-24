import { useState, useContext } from 'react';
import './AddEmployee.css';
import { EmployeeContext } from '../../EmployeeAppContext';

const AddEmployee = () => {
    const { setEmployeeData, employeeData } = useContext(EmployeeContext)
    const [inputValues, setInputValues] = useState( {
        fullName: "",
        title: "",
        email: "",
        callMobile: "", 
        sms: "",
        image: "",
        callOffice: "",
    } );

    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    
    const SuccessAlert = () => {
      return (
        <div style={{backgroundColor: "lightgreen", border: "1px solid lightgreen", height: "160px"}}>
        <h2>Succes</h2>
        <p>You have successfuly submite an employee information!</p>
      </div>
      )
    };

    const handelChange = (event) => {
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value});
    };

      const handleSubmit = (event) => {
        event.preventDefault();
        setEmployeeData([...employeeData, inputValues]);
        setShowSuccessAlert(true)
      };

    return (
       <>
       <h1>Add Employee</h1>
        {showSuccessAlert && <SuccessAlert />}
        <form className="add-employee-form" onSubmit={handleSubmit} >
            <input 
              type="text" 
              placeholder="full name" 
              value={inputValues.fullName}
              name="fullName" 
              onChange={handelChange} />
            <input 
              type="text" 
              placeholder="title" 
              value={inputValues.title}
              name="title" 
              onChange={handelChange}/>
            <input 
              type="text" 
              placeholder="email" 
              value={inputValues.email}
              name="email" 
              onChange={handelChange}/>
            <input 
              type="text" 
              placeholder="call mobile" 
              value={inputValues.callMobile}
              name="callMobile" 
              onChange={handelChange}/>
            <input 
              type="text" 
              placeholder="sms" 
              value={inputValues.sms}
              name="sms" 
              onChange={handelChange}/>
            <input 
              type="text" 
              placeholder="image" 
              value={inputValues.image} 
              name="image" 
              onChange={handelChange}/>
            <input 
              type="text" 
              placeholder="call office" 
              value={inputValues.callOffice}
              name="callOffice" 
              onChange={handelChange}/>
            <button>Submit</button>
        </form>
       </>
    );
};

export default AddEmployee;