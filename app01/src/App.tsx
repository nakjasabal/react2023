import * as D from "./data";
import './App.css';

function App() {
  console.log("잘되나요?");
  return (
    <div className="App">
      <h1>Hello React</h1>      
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="200" />
      <img src={D.randomImage()} height="200" />
    </div>
  );
}

export default App;
