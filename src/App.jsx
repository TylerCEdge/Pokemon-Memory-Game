import React, { Component } from 'react'
import Wrapper from './components/wrapper'
import Header from './components/header'
import Card from './components/card'
import cards from './cards.json'

function shuffle (arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
console.log(shuffle(cards))

class App extends Component {

	state = {
		cards,
		score: 0,
		hiscore: 0
			
	}


	

	render() {
		return (
			<div>
				<Header score={this.state.score} hiscore={this.state.hiscore}>
					Clicky Game
				</Header>
				<div className='container'>
					<Wrapper>
						{this.state.cards.map(card => (
							<Card id={card.id} key={card.id} image={card.image} />
						))}
					</Wrapper>
				</div>
			</div>
		)
	}
}

export default App
