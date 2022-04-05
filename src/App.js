import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={'Roy'} color={'red'} />
        <Fighter name={'Fox'} color={'green'} />
        <Fighter name={'Ganondorf'} color={'purple'} />
        <Fighter name={'Sheik'} color={'lightskyblue'} />
      </div>
      <div>
        <h2>Roy</h2>
        <p>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" />         
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium delectus enim asperiores blanditiis magni numquam. Accusamus minus debitis ipsum ad quibusdam et odio voluptate culpa similique, esse iusto ut!
          </p>
      </div>
    </div>
  );
}

export default App;
