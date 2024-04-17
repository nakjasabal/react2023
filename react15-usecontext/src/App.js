import './App.css';
import { SimpleContext } from './context/SimpleContext';
import Simple from './components/CompConext'

function App() {
  return (<>
    <div className="App">
      <h2>useState</h2>
      <Simple></Simple>
    </div>  
    <SimpleContext.Provider value={'Provider의 초기값'}>
      <div className="App">
        <h2>useContext - Provider로 감싸기</h2>
        <Simple></Simple>
      </div>  
    </SimpleContext.Provider>
    <div className="App">
      <h2>useContext - 감싸지 않았을때</h2>
      <Simple></Simple>
    </div>  
  </>); 
}

export default App;
