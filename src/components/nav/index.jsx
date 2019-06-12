import React from 'react'
import './styles.css'

export default function Nav() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li className="brand">

                    </li>
                    <li id="controller">
                        Pokemon Game!
                    </li>
                    <li id="currentScore">
                        Current Score:
                    </li>
                    <li id="highScore">
                        High Score:
                    </li>
                </ul>
            </nav>
        </div>
    )
}
