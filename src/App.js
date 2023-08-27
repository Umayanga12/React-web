import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Nav-bar/Nav-bar';
import Slider from './componant/Carusels/Slider';
import BasicExample from './componant/Nav-bar/Nav-bar';
import KitchenSinkExample from './componant/Card/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample/>
      </header>
      <Slider/>
      <div className='card-container'>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
      </div>
      <div className='card-container'>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
        <KitchenSinkExample/>
      </div>
    </div>
  );
}

export default App;
