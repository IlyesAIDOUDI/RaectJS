import './App.css';

import Expenses from './components/Expenses';
import Modif from './components/Modif';

function App() {

  const expenses = [
    { id: 'aa', amount: 94.12, title: 'Playstation 2', date: new Date(2022, 6, 11) },
    { id: 'ab', amount: 799.49, title: 'Iphone 8', date: new Date(2022, 12, 12) },
    { id: 'ac', amount: 294.67, title: 'Echéance prêt', date: new Date(2021, 2, 28) },
    { id: 'ad', amount: 450, title: 'Courses', date: new Date(2021, 5, 12) },
    { id: 'ad', amount: 450, title: 'Courses', date: new Date(2021, 5, 12) },
  ];

  const modif = [
    {
      title: 'Ajouter des dépenses'
    },
    { title: 'Supprimer/Modifier des dépenses' }
  ];


  return (
    <div className="App">
      <header className="App-header">

        <p>
          Bonjour { }
        </p>
        <p1>
          Voici vos dépenses :
        </p1>
        <Expenses items={expenses} />
        <h1>
          <Modif items={modif} />
        </h1>
      </header>
    </div >
  );
}


export default App;






