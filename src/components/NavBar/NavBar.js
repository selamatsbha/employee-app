import { Fragment } from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
    <Fragment>
        <div className = 'nav' style={SyledNav} >
            <h4>Employee App</h4>
            <ul style={{display: "flex", 
                        justifyContent: "space-between", 
                        width: "35%", 
                        listStyle: "none",
                        color: "#fff",
                        cursor: "pointer",}}>
                <li><Link style={{textDecoration: "none", color: "#fff" }} to="/">Home</Link></li>
                <li><Link style={{textDecoration: "none", color: "#fff" }} to="/add-employee">Add Employee</Link></li>
                <li><Link style={{textDecoration: "none", color: "#fff" }} to="/employee-list">Employee List</Link></li>
                <li><Link style={{textDecoration: "none", color: "#fff" }} to="/">Logout</Link></li>
            </ul>
        </div>
    </Fragment>
    );
}

const SyledNav = {
    backgroundColor: "#2196F3",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 25px",
    boxShadow: "0px 4px 8px rgba(0, 0,0, 0.26",
};

export default NavBar; 