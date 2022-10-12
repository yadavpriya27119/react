const ChildrenProps = () => {
    const data = 'Hi Child from Parent';
    return (
        <div>
            <h1>I have sent u Hi </h1>
            <h2>I m h2</h2>
            <Child dataFromParent={data} />
        </div>
    )
}

const Child = ({ dataFromParent, children }) => {
    return (
        <div>
            {children}
            {dataFromParent}
        </div>
    )
}

export default ChildrenProps;