const ParentToChildAll = () => {

    return (
        <div>
            <Child empid={1} name='abc' payroll={true} />
        </div>
    )
}

const Child = (props) => {
    return (
        <div>
            <h1>{props.empid}</h1>
            <h1>{props.name}</h1>
            <h1>is Employee on Payroll? {props.payroll ? 'yes' : 'no'}</h1>
        </div>
    )
}

export default ParentToChildAll;