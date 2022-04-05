import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from "react"

const characters = [
  {name: 'Roy', color: 'red'},
  {name: 'Fox', color: 'green'},
  {name: 'Ganondorf', color: 'purple'},
  {name: 'Sheik', coplor: 'lightskyblue'}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [slectedCharacter, setSlectedCharacter] = useState(characters[0])
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element, i) => {
            return(<Fighter name={element.name} color={element.color} setVisible={setVisible}  setSlectedCharacter={setSlectedCharacter}/>)
        })}
        
        
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} slectedCharacter={slectedCharacter}/> 
    </div>
  );
}

export default App;
