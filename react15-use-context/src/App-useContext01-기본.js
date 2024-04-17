import './App.css';

//컴포넌트 임포트
import CompState1 from './commons/CompState1';
import CompContext1 from './commons/CompConext1';
import { SimpleContext } from './context/SimpleContext';

function App() {
  return (<>
    <div className="App">
      <h2>useState</h2>
      <CompState1 propData={'Props로 전달되는 데이터'} />
    </div>  
    <div className="App">
      <h2>useContext Provider 미사용</h2>
      <CompContext1 />
    </div>  

    <SimpleContext.Provider value={'Provider의 초기값'}>
    <div className="App">
      <h2>useContext Provider 래핑</h2>
      <CompContext1 />
    </div>  
    </SimpleContext.Provider>
  </>); 
}

export default App;
