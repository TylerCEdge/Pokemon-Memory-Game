import React from 'react'
import './styles.css'

const NavBar = props => (
        <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
                | Score: {props.score} | HiScore: {props.hiscore} |
            </div>
        </div>
)


export default NavBar