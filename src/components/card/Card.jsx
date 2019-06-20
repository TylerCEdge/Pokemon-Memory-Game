import React from 'react'
import './styles.css'

const Card = props => (
	<div className='card' value={props.id} onClick={() => props.handleClick(props.id)}>
		<img alt={props.image.replace(".png", "")} src={require("../../img/" + props.image)} />
	</div>
)

export default Card
