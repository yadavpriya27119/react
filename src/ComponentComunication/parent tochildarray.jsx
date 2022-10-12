const ParentToChildArray = () => {
    const employees = [
        {
            name: 'amit',
            desg: 'trainee'
        },
        {
            name: 'ami',
            desg: 'developer'
        }]
    return (
        <div>
            <Child employees={employees} />
        </div>
    )
}

/*const Child = ({ employees }) => {
    const employeeslist = employees.map((employee, index) => (
        <li key={index}>
            <p>Name: {employee.name}</p>
            <p>Designation: {employee.desg}</p>
        </li>
    ));
    return (<ul>{employeeslist}</ul>);

}*/

const Child = ({ employees }) => {
    return (
        <ul>
            {employees.map((employee, index) => (
                <li key={index}>
                    <p>Name: {employee.name}</p>
                    <p>Designation: {employee.desg}</p>
                </li>
            ))}
        </ul>
    );
}

export default ParentToChildArray;