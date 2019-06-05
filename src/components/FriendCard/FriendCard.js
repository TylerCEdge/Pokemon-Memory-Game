import React from "react";
import "./style.css";

const FriendCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image} src={require('../../images/' + props.image)} />
        </div>
    </div>
)

export default FriendCard;