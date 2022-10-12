const Greet = (props) => {
    return <h1>Hello  {props.name} </h1>;
};
function HigherOrderComponent(BaseComponent) {
    return function EnhancedComponent() {
        return <BaseComponent name="I M Higher Order Component" />;
    };
}
export const MyHOC = HigherOrderComponent(Greet);