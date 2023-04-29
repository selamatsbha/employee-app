import './EmployeeListItem.css';

function EmployeeListItem ({ employeeData }) {
    return (
        <>
        {employeeData.map(({ image, fullName, title }, index) => {
            return (
                 <div className = "employee-list-item" key={index}>
                   <img src ={image  } alt = "Some here" />
                   <div className = "employee-content">
                   <h4 className = "employee-name">{fullName}</h4>
                   <p className = "employee-title">{title}</p>
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