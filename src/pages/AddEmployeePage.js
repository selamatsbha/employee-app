import AddEmployee from "../components/AddEmployee/AddEmployee";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBar/NavBar";

const AddEmployeePage = (props) => {
    return (
        <>
        <NavBar/>
        <Wrapper>
            <AddEmployee employeeData={props.employeeData} 
             setEmployeeData={props.setEmployeeData} />
        </Wrapper>
        </>
    );
};

export default AddEmployeePage;