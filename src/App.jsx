import React, { Component } from 'react'
import Wrapper from './components/wrapper'
import Header from './components/header'
import Card from './components/card'
import cards from './cards.json'

class App extends Component {
	// Setting state
	state = {
		cards,
		score: 0,
		hiscore: 0,
	}

	// If game is over
	gameOver = () => {
		if (this.state.score > this.state.hiscore) {
			this.setState({ hiscore: this.state.score }, function() {
				console.log(this.state.hiscore)
			})
		}
		this.state.cards.forEach(card => {
			card.count = 0
		})
		alert(`Game Over :( \nscore: ${this.state.score}`)
		this.setState({ score: 0 })
		return true
	}

	clickCount = id => {
		this.state.cards.find((o, i) => {
			if (o.id === id) {
				if (cards[i].count === 0) {
					cards[i].count = cards[i].count + 1
					this.setState({ score: this.state.score + 1 }, function() {
						console.log(this.state.score)
					})
					this.state.cards.sort(() => Math.random() - 0.5)
					return true
				} else {
					this.gameOver()
				}
			}
		})
	}

	render() {
		return (
			<div>
				<Header score={this.state.score} hiscore={this.state.hiscore}>
					Clicky Game
				</Header>
				<div className="container">
				<Wrapper>
					{this.state.cards.map(card => (
						<Card
							clickCount={this.clickCount}
							id={card.id}
							key={card.id}
							image={card.image}
						/>
					))}
				</Wrapper>
				</div>
			</div>
		)
	}
}

export default App
