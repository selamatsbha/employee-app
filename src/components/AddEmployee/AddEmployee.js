import { useState } from 'react';
import './AddEmployee.css';
const AddEmployee = (props) => {
    const [inputValues, setInputValues] = useState( {
        fullName: "",
        title: "",
        email: "",
        callMobile: "", 
        sms: "",
        image: "",
        callOffice: "",
    } );

    console.log("input values", inputValues);

    const handelChange = (event) => {
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value});
    };

      const handleSubmit = (event) => {
        event.preventDefault();
        props.setEmployeeData([...props.employeeData, inputValues]);
      };

    return (
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
    );
};

export default AddEmployee;