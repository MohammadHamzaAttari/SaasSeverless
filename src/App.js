import './App.css';
import Detail from './components/Details';
function App() {
  return (
    <div className="App">
      <Detail name="Chicken Biryani" sweet="Gajar ka Halwa" sname="sofia" />
      <hr />
      <Detail name="Chicken Karahi" sweet="Pethay ka Halwa" />
      <hr />
      <Detail name="Chicken Korma" sweet="PineAple ka Halwa" />
      <hr />

    </div>
  );
}

export default App;
