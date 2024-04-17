import './App.css';

//컴포넌트 임포트
import CompState1 from './commons/CompProps1';
import CompContext1 from './commons/CompConext1';
//컨텍스트 임포트 
import { SimpleContext } from './context/SimpleContext';

function App() {
  return (<>
    {/* 컴포넌트간 데이터 전달에는 Props가 사용된다. Top-down 방식이므로 각 컴포넌트를 거쳐서 전달해야한다  */}
    <div className="App">
      <h2>Props를 통한 데이터 전달</h2>
      <CompState1 propData={'Props로 전달되는 데이터'} />
    </div>  

    {/* createContext를 통해 컨텍스트 변수를 생성하면 전역적으로 사용할 수 있다. 변수를 생성한 후 사용할 컴포넌트에서 useContext 훅을 사용해서 값을 얻어올 수 있다. */}
    <div className="App">
      <h2>useContext 적용</h2>
      <CompContext1 />
    </div>  

    {/* Provider로 데이터를 공유할 모든 컴포넌트를 감싸준다. 공유할 데이터는 value 프로퍼티를 사용한다. useContext 훅으로 값을 얻어오는것은 동일하다. */}
    <SimpleContext.Provider value={'Provider의 초기값'}>
    <div className="App">
      <h2>useContext 적용 및 Provider 래핑</h2>
      <CompContext1 />
    </div>  
    </SimpleContext.Provider>
  </>); 
}

export default App;
