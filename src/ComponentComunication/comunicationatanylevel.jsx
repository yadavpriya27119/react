import React, { useState } from 'react'
//import './Empadd.css'
const CommunicationatAnyLEvel = () => {
    const employees = [
        {
            id: 1,
            name: 'amit',
            desg: 'trainee',
            payroll: true
        },
        {
            id: 2,
            name: 'ami',
            desg: 'developer',
            payroll: true
        }]
    const [empList, setEmplist] = useState(employees)

    const removeEmp = (id) => {
        const list = empList.filter(item => item.id !== id);
        setEmplist(list);

    }
    const addEmp = (details) => {

        const newId = employees.length + 1;
        const newEmployee = { ...details, id: newId };
        setEmplist([...employees, newEmployee])

    }
    return (
        <div>
            <Employee details={empList} removeEmp={removeEmp} />
            <EmployeeForm addEmp={addEmp} />
        </div>
    )
}
const Employee = props => {
    const details = props.details;
    return (
        <div>

            <ul>
                {details.map((detail, index) => (
                    <EmployeeDetails detail={detail} removeEmp={props.removeEmp} key={index} />
                ))}
            </ul>
        </div>
    );
};
const EmployeeDetails = props => {
    console.log('Props in empdetails', props)
    const { name, desg, id, payroll } = props.detail;
    return (
        <li key={id}>
            <div>
                <p>Name : {name}</p>
                <p>Designation : {desg}</p>
                <p>Payroll Employee? {payroll ? 'yes' : 'no'} </p>
                <button onClick={() => props.removeEmp(id)}>Remove from the
                    list</button>
            </div>

        </li >
    );
};
class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            desg: '',
            payroll: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInputValue(target) {
        if (target.type === 'radio' && target.value === 'yes') {
            return true;
        } else if (target.type === 'radio' && target.value === 'no') {
            return false;
        }

        return target.value;
    }

    handleChange(event) {
        const inputTarget = event.target;
        const inputValue = this.getInputValue(inputTarget);
        const inputName = inputTarget.name;

        this.setState({ [inputName]: inputValue });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addEmp(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add new Employee details</h2>
                <label>
                    <div className='title'>Name:</div>{' '}
                    <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <label>
                    <div className='title'>Number:</div>{' '}
                    <input type='text' name='desg' onChange={this.handleChange} />
                </label>
                <div>
                    <div className='title'>Payroll:</div>
                    <label>
                        <input
                            type='radio'
                            name='payroll'
                            value='true'
                            onChange={this.handleChange}
                        />{' '}
                        Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='endangered'
                            value='false'
                            onChange={this.handleChange}
                        />{' '}
                        No
                    </label>
                </div>

                <div>
                    <button>Add Employee</button>
                </div>
            </form>
        );
    }
}

export default CommunicationatAnyLEvel;