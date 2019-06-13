import React from 'react'
import './styles.css'

const Card = props => (
	<div className='card' onClick={() => props.clickCount(props.id)}>
		<img alt={props.name} src={props.image} />
	</div>
)

export default Card
