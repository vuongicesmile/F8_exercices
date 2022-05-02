import './App.css';
import Content from './components/Content/Content';
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


// ThemeContext sẽ trả về cho bạn 1 object là Provider và Consumer


function App() {
  const context = useContext(ThemeContext)
  return (
    <div className="App" style={{padding : 20}}>
        <button onClick={context.ToggleTheme}>Toggle themes</button>
        <Content></Content>
    </div>
  
  );
}

export default App;
