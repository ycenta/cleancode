import { useState } from 'react'
import './Home.css'

function Home() {

  return (
    <>
      <div>
        <h1>Home</h1>
        <button className="button" onClick={() => window.location.href = '/quizz'}>Start Quizz</button>
        <button className="button" onClick={() => window.location.href = '/cards'}>Cards</button>
        <button className="button" onClick={() => window.location.href = '/create-card'}>Create Card</button>
      </div>
      
    </>
  )
}

export default Home
