import React from 'react'
import './styles.css'

const Card = props => (
	<div className='card' value={props.id} onClick={() => props.handleClick(props.id)}>
		<img alt={props.name} src={props.image} />
	</div>
)

export default Card
