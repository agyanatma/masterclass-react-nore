import React from "react";
import Button from "./components/Button/Button";

function App() {
    const handleClick = () => {
        alert("klik");
    };

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Button title="Yes" bg="#ff0000" onClick={handleClick} />
        </div>
    );
}

export default App;
