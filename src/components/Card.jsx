import React from 'react'
import { Image } from 'react-bootstrap'

const Card = props => (
	<div value={props.id} onClick={() => props.handleClick(props.id)}>
		<Image alt={props.image.replace(".png", "")} src={require("../images/" + props.image)} rounded />
	</div>
)

export default Card
