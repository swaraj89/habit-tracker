import './App.css';
import TrackerCell from './components/TrackerCell/tracker-cell'
import InputCell from './components/InputCell/input-cell'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TrackerCell />
        <InputCell />
      </header>
    </div>
  );
}

export default App;
