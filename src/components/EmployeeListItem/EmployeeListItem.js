import './EmployeeListItem.css';

function EmployeeListItem ({ employeeData }) {
    return (
        <>
        {employeeData.map(({ image, name, title }) => {
            return (
                <>
                 <div className = "employee-list-item">
                   <img src ={image  } alt = "Some here" />
                   <div className = "employee-content">
                   <h4 className = "employee-name">{name}</h4>
                   <p className = "employee-title">{title}</p>
                   </div>
                 </div>
                </>
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