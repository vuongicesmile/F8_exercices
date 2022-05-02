import './App.css';
import { useState } from 'react'
import Modal from './Modal';




function App() {
  const [hide, setHide] = useState(false);

  const handleClick =() => {
    setHide(true)
    
  }

  console.log(setHide)

  return (
    <div style={{ padding: '10px 32 px' }}>
      <button className= "ShowModal" onClick= {handleClick}>Click</button>
      <Modal  modalHide = {hide} modalShow = {setHide}  />
    </div>
  )
}


export default App
