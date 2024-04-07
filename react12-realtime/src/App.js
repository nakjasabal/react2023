import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
import RealtimeCRUD from './RealtimeCRUD';
import RealtimeListener from './RealtimeListener';

function Navi(){
  return (<>
    <div>
      <Link to="/crud">RealtimeCRUD</Link>
      <Link to="/listener">RealtimeListener</Link>
    </div>
  </>);
}

function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <Routes>
          <Route path='/' element={<RealtimeCRUD/>}></Route>
          <Route path='/crud' element={<RealtimeCRUD/>}></Route>
          <Route path='/listener' element={<RealtimeListener/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;