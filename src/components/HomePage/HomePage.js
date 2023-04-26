import EmployeeList from '../EmployeeList/EmployeeList';
import Header from '../Header/Header';
import Search from '../Search/Search';
import "./HomePage.css"

function HomePage ({setInputValue, employeeData, handleSearch}) {
    return (
     <div className = "home-page">
        <Header headerTitle = "Employee Directory" />
        <Search setInputValue={setInputValue} handleSearch = {handleSearch} />
        <EmployeeList employeeData={employeeData} />
     </div>
    );
}

export default HomePage;