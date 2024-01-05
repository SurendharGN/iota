import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div className='root'>
      <header>
        <h1>Iota.</h1>
        <div id='links'>
          <Link to='/downloadExtension'>Download extension </Link>
          <span>|</span>
          <Link> Documentation  </Link>
          <span>|</span>
          <Link> Github</Link>

        </div>
        
      </header>
      <main id='desc'>
        <span id="separator"></span>
        <p>An application to detect, the use, type, and scale of dark patterns on e-commerce platforms.
          <span >
            It includes patterns such as
        User Interface Deception,Subscription Trickery,
Misleading Product Information,Forced Account Creation, Limited User Choice, Misleading Product Information, Fake Urgency and Scarcity, Hidden Costs.
          </span>
        
        </p>
      </main>
    </div>
  )
}

export default App
