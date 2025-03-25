import './App.css'
import Greeting from "./Greeting";
import NumberDisplay from './NumberDisplay';
import BurgerList from './BurgerList';

function App() {
  const name = "Martin Dressler", number = 19, count = 3, b_name = "Double Cheeseburger";

  return (
    <>
      <div>
        <h1>Hello, React!</h1>
        <p>My name is {name}.</p>
        <Greeting />
        <NumberDisplay number={number} />
        <BurgerList count={count} name={b_name} />
      </div>
    </>
  )
}

export default App