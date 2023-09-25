

function MainComponentContainer({component, deleteComponent}) {
    return (
        <div className="main-component-container">
            <div className="main-component">
                {component}
            </div>
            <div>
                <button onClick={() => deleteComponent()}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MainComponentContainer;