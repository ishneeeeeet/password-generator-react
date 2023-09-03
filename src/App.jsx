import { useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)


  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_+=<>?';


  let newPassword = ""

  const passwordGenerator = () => {
      for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * length)
        
        
      }
  }

  return (
    <>
      <div>
        <h1>
          Password Geneator
        </h1>
        <div>
          <input type="text" />
          <button>Copy</button>
        </div>
        <div>
        <input type="range" min={6} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
        <span>Length({length})</span>
        <input type="checkbox" />
        <span>Numbers</span>
        <input type="checkbox" />
        <span>Charaters</span>
        </div>
      </div>
    </>
  )
}

export default App
