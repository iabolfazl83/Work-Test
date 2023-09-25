import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

function ComponentsContainer({onSelect}) {
    return (
        <div className="components-container">
            <div className="component-1">

                <FirstComponent></FirstComponent>
                <button onClick={() => onSelect(<FirstComponent/>)}>1</button>

            </div>
            <div className="component-2">

                <SecondComponent></SecondComponent>
                <button onClick={() => onSelect(<SecondComponent/>)}>2</button>

            </div>
            <div className="component-3">

                <ThirdComponent></ThirdComponent>
                <button onClick={() => onSelect(<ThirdComponent/>)}>3</button>

            </div>
        </div>
    )
}


export default ComponentsContainer;