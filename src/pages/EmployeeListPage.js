import Wrapper from "../components/Wrapper/Wrapper";
import HomePage from "../components/HomePage/HomePage";
import EmployeePage from "../components/EmployeePage/EmployeePage";
import NavBar from "../components/NavBar/NavBar";

const EmployeeListPage = (props) => {
    return (
        <>
        <NavBar />
        <Wrapper>
            <HomePage 
             error={props.error} 
             setInputValue={props.setInputValue} 
             employeeData={props.employeeData} 
             handleSearch = {props.handleSearch}/>
            <EmployeePage 
            setInputValue={props.setInputValue} 
             employeeData={props.employeeData} 
             handleSearch = {props.handleSearch}/>
        </Wrapper>
        </>
    );
};

export default EmployeeListPage;