import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import ListOfNumbers from './components/listOfNumbers';

function App() {
  return (
    <div className="App">
     <Counter ></Counter>
     <ListOfNumbers numbers= {[1,2,2,4,5,6]}></ListOfNumbers>
    </div>
  );
}

export default App;
