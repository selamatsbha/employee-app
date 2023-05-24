import './EmployeeListItem.css';
import { useContext } from 'react';
import { EmployeeContext } from '../../EmployeeAppContext';

function EmployeeListItem () {
    const {employeeData} = useContext(EmployeeContext)
    return (
        <>
        {employeeData.map(({ image, name, occupation }, index) => {
            return (
                 <div className = "employee-list-item" key={index}>
                   <img src ={image  } alt = "Some here" />
                   <div className = "employee-content">
                   <h4 className = "employee-name">{name}</h4>
                   <p className = "employee-title">{occupation}</p>
                   </div>
                 </div>
            );
           }) 
        }
        </>
        // <ul>
        //     <li><img src = " " alt = "some here" /></li>
        //     <li><h4>Title</h4></li>
        //     <li><p>Some description</p></li>
        // </ul>
    );
}

export default EmployeeListItem;