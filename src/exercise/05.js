// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
    const tiltRef = React.useRef()
  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.


  React.useEffect(()=> {
    const tiltNode = tiltRef.current // Captura da div externa via um ref
    //const tiltNode = document.getElementsByClassName('tilt-root')[0]  <= JS Puro
    VanillaTilt.init(tiltNode, {
        max: 50,
        speed: 400,
        glare: true,
        'max-glare': 0.9,
    })
  // opcionalmente a funcao do useEffect pode retornar uma funcao de limpeza
  //que remove quaisquer elementos que foram add ao DOM pelo proprio useEffect()
    return () => tiltNode.vanillaTilt.destroy()
  }, [/*Sem dependencias*/])

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
