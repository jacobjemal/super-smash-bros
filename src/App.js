import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from "react"

const characters = [
  {name: 'Roy', color: 'red'},
  {name: 'Fox', color: 'green'},
  {name: 'Ganondorf', color: 'purple'},
  {name: 'Sheik', color: 'lightskyblue'},
  {name: 'cloud', color: 'mediumseagreen'},
  {name: 'zelda', color: 'pink'},
  {name: 'falco', color: 'orange'},
  {name: 'samus', color: 'firebrick'},
  {name: 'link', color: 'yellow'}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element, i) => {
            return(<Fighter name={element.name} color={element.color} setVisible={setVisible}  setSelectedCharacter={setSelectedCharacter}/>)
        })}
        
        
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter}/> 
    </div>
  );
}

export default App;
