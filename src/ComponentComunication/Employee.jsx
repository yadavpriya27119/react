const EmployeeDetails = props => {
    console.log(props);
    const { name, desg } = props.detail;
    return (
        <li key={props.key}>
            <div>
                <p>Name : {name}</p>
                <p>Designation : {desg}</p>

            </div>
        </li>
    );
};


export const Employee = props => {
    const details = props.details;
    console.log(details);
    return (
        <div>

            <ul>
                {details.map((detail, index) => (
                    <EmployeeDetails detail={detail} key={index} />
                ))}
            </ul>
        </div>
    );
};