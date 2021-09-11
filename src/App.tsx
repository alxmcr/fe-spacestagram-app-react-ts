import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from './routing/SwitchRoutesApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutesApp />
      </BrowserRouter >
    </div>
  );
}

export default App;
