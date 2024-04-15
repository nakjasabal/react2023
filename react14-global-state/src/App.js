import './App.css';
import { useReducer, useState } from 'react';

const countReducer = (prevCount, action) => {
  if(action.mode === 'up'){
    return prevCount + action.number;
  }
  else if(action.mode === 'down'){
    return prevCount - action.number;
  }
  else if(action.mode === 'reset'){
    return 0;
  }
}

/**
useState와 유사하게 상태를 관리한다. 
여러개의 하위값을 가진 State를 관리할때 유용하다. 
컴포넌트에서 상태를 업데이트하는 로직을 분리할 수 있다. 
useReducer는 다음 3가지로 구성된다.
-Reducer : 
-Dispatch : 
-Action : 

형식]
  Dispatch(Action) ==> Reducer( State, Action )
  즉 Reducer가 전달받은 Action에 따라 State를 업데이트한다.
 */
function App() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [number, setNumber] = useState(1);

  const changeNumber = (event) => {
    setNumber(Number(event.target.value));
  }

  const down = () => {
    countDispatch({ mode:'down', number:number });
  }
  const up = () => {
    countDispatch({ mode:'up', number:number });
  }
  const reset = () => {
    countDispatch({ mode:'reset', number:number });
  }

  return (
    <div className="App">
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="0" onClick={reset} />
        <input type="button" value="+" onClick={up} />
        <input type="number" value={number} onChange={changeNumber} />
        <span>{count}</span>
      </div> 
    </div>
  );
}

export default App;

