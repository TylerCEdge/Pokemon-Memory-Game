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
// console.log(shuffle(cards))

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cards,
			score: 0,
			hiscore: 0,
			message: '',
			clicked: [],
		}
	}

	// handleReset = () => {
	// 	this.setState({
	// 		score: 0,
	// 		hiscore: this.state.hiscore,
	// 		message: '',
	// 		clicked: [],
	// 	})
	// 	this.handleShuffle()
	// }

	handleGuess = () => {
		const newScore = this.state.score + 1
		this.setState({
			score: newScore,
		})

		if (newScore >= this.state.hiscore) {
			this.setState({
				hiscore: newScore,
			})
		}
		this.handleShuffle()
	}

	handleClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.setState({ clicked: this.state.clicked.concat(id) })
			this.handleGuess()
		} else if (this.state.clicked.length === 12) {
			let win = 'You Win'
			this.setState({
				score: 0,
				hiscore: 12,
				message: 'You Win',
				clicked: [],
			})
			console.log(win)
			this.handleShuffle()
		} else {
			let lose = 'You Lose'
			this.setState({
				score: 0,
				hiscore: this.state.hiscore,
				message: lose,
				clicked: [],
			})
			console.log(lose)
			this.handleShuffle()
		}
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
								handleGuess={this.handleGuess}
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
