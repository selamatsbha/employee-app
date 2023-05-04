import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

const EmployeeList = (props) => {
    console.log("props from employee list", props);
    return (
        <>
        { props.error !== "" && <p style={{color:"red"}}>{props.error}</p>}
        <EmployeeListItem employeeData={props.employeeData} />
        
        </>
    )
};

export default EmployeeList;