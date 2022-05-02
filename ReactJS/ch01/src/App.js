import { useState } from 'react/cjs/react.production.min';
import './App.css';
import './components/Modal'


function App() {

  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true)
  }

  return (
    <div className="root">
    
     hiiiii
      {/* <Modal  modalHide = {hide}  /> */}
    </div>
  )

};

export  default App;


