import React from 'react'
import pubg from './pubgpng.png'
export default function Card() {
  return (
    <button className='card' onClick={() => alert('Card clicked!')} style={{ border: 'none', background: 'none', padding: 0 }}>
      <img className='image' src={pubg} alt="pubg" />
      <h1 className='title'>Pubg</h1>
      <p className='description'>Pubg is a battle royale game. </p>
    </button>
  )
}