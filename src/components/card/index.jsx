import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
  handleClick,
  flipped,
  solved,
  id,
  height,
  type,
  width,
  disabled,
}) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className='flipper'>
        <img
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
          style={{ width, height }}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}