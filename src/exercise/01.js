// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, SetName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    SetName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Olá {name}, está tudo bem com voce?</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Eduaney" />
}

export default App
