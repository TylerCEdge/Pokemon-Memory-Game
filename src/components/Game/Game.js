import React from "react";
import "./style.css"

function Game(props) {
    return <div className="wrapper">{props.children}</div>
}

export default Game;