import './App.css';
import {useState} from "react";
import ComponentsContainer from "./Components/ComponentsContainer";
import MainComponentContainer from "./Components/MainComponentContainer";

function App() {
    const [selectedComponent, setSelectedComponent] = useState();
    const onComponentSelect = (c) => {
        setSelectedComponent(c)
    }

    const deleteSelectedComponent = () => {
        setSelectedComponent(null)
    }

    return (
        <div className="app">
            <ComponentsContainer onSelect={(c) => onComponentSelect(c)}/>
            <MainComponentContainer component={selectedComponent} deleteComponent={deleteSelectedComponent}/>

        </div>
    );
}

export default App;
