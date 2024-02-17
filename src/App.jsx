import { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div className='root'>
      <header>
        <h1 id='title'>iota.</h1>
        <div id='links'>
          <Link to='/downloadExtension'>Download extension </Link>
          <span>|</span>
          <Link> Documentation </Link>
          <span>|</span>
          <Link to='/curated-findings'> Curated findings</Link>

        </div>
        
      </header>
      <main id='desc'>
        {/* <div id='enterURL'>
          <Link to='/token'>Enter URL <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></Link>
        </div> */}
        
        
        <p className='desc-para'>
          An application to detect, the use, type, and scale of dark patterns on e-commerce platforms.
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
