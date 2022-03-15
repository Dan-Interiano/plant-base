import React from 'react'
import Button from '../Button/Button';
import './Home.css';
import '../../App.css'

export default function Home() {
  return (
    <div className='hero-container'>
        <h1>NATURE ROCKS</h1>
        <p>Need ideas to brighten up your space?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                WATCH TRAILER <i className='far fa-play-circle'></i>
            </Button>
        </div>
    </div>
  )
}