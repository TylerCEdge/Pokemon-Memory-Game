import React, { Component } from 'react'
import Wrapper from './components/wrapper'
import Header from './components/header'
import Card from './components/card'
import cards from './cards.json'

// Obtained snippet from https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
const shuffle = arr =>
	arr
		.map(a => [Math.random(), a])
		.sort((a, b) => a[0] - b[0])
		.map(a => a[1])

// function shuffle (arr) {
// 	for (let i = arr.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1));
// 		[arr[i], arr[j]] = [arr[j], arr[i]];
// 	}
// 	return arr;
// }
//Console log confirmed cards are being randomized
console.log(shuffle(cards))

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cards,
			score: 0,
			hiscore: 0,
			rightWrong: '',
			clicked: [],
		}
	}

	handleClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.handleIncrement()
			this.setState({ clicked: this.state.clicked.concat(id) })
		} else {
			this.handleReset()
		}
	}

	handleIncrement = () => {
		const newScore = this.state.score + 1
		this.setState({
			score: newScore,
			rightWrong: '',
		})
		if (newScore >= this.state.hiscore) {
			this.setState({ hiscore: newScore })
		} else if (newScore === 12) {
			this.setState({ rightWrong: 'You win!' })
		}
		this.handleShuffle()
	}

	handleReset = () => {
		this.setState({
			score: 0,
			hiscore: this.state.hiscore,
			rightWrong: 'Opps! Try Again!',
			clicked: [],
		})
		this.handleShuffle()
	}

	handleShuffle = () => {
		let shuffled = shuffle(cards)
		this.setState({ cards: shuffled })
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
							<Card
								id={card.id}
								key={card.id}
								image={card.image}
								handleClick={this.handleClick}
								handleIncrement={this.handleIncrement}
								handleReset={this.handleReset}
								handleShuffle={this.handleShuffle}
							/>
						))}
					</Wrapper>
				</div>
			</div>
		)
	}
}

export default App
