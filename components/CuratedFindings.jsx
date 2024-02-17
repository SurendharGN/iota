import React from 'react'

const CuratedFindings = () => {
  return (
    <main id="curated-findings-main">
      <h1>
        Report Dark Pattern
      </h1>
      <p id='curated-findings-desc'>
        Have you discovered a dark pattern? - Help us to expand our collection!
        <span id='curated-findings-span'>Enter the website or app concerned in the form below and/or add pictures and a description.</span>
      <div>
        <input type="text" placeholder='URL' />
        <input type="text" placeholder='Description' />
        <input type="image" placeholder='Screenshot' />
        <button type='submit'>Submit</button>
      </div>

      </p>

    </main>
  )
}

export default CuratedFindings