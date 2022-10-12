export const CondRenderFunUsingFn = () => {
    const renderMessage = (show) => {
        if (show) {
            return <p>Hello I M Conditionally Rendered</p>;
        } else {
            return null;
        }
    }

    const showMessage = true;
    return (
        <div>
            { renderMessage(showMessage)}
        </div>
    );

}