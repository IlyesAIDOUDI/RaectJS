import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Bonjour { },
        </p>
        <p>
          Voici vos dépenses :
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Se déconnecter
        </a>
      </header>
    </div >
  );
}

export default App;
