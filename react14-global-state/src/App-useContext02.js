import './App.css';
import { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

/** Page 컴포넌트는 state가 필요하지 않으므로 기존 props로 전달되는 부분을 삭제한다.  */
const Page = () => {
  /**
  value props로 전달된 객체가 출력된다. 
  만약 App에서 Provider로 감싸지 않았다면 ThemeContext에서 지정한 초기값이 출력된다. 
   */
  const data = useContext(ThemeContext);
  console.log("Page컴포넌트", data);

  return (
      <div className="page">
        <Header></Header>
        <Content></Content>   
        <Footer></Footer>
      </div>    
  );
}

/** 아래 3개의 컴포넌트는 Page 컴포넌트를 거치지 않고 
useContext 훅을 통해 데이터를 직접 받을 수 있다. 
*/
const Header = () => {
  const { isDark } = useContext(ThemeContext);  
  console.log('Header컴포넌트', isDark);
  const userName = useContext(UserContext);

  return (
    <header className="header" 
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray', 
        color : isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome {userName}..!!</h1>
    </header>
  );
}

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const userName = useContext(UserContext);

  return (
    <div className="content"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray', 
        color : isDark ? 'white' : 'black'
      }}
    >
      <p>{userName} 반가워..ㅋㅋ</p>
    </div>  
  );
}

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <div className="footer"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray'
      }}
    >
      <input type="button" value="Dark Mode" className="button" onClick={toggleTheme}></input>
    </div> 
  );
}

function App() {

  //상태 전환을 위한 state 생성
  const [isDark, setIsDark] = useState(false);

  /**  ThemeContext 생성 후 최상위 컴포넌트인 App을 Provider로 감싼다. 
  그러면 App 하위의 모든 컴포넌트는 useContext 훅을 통해 데이터를 받을 수 있다. 
  전달할 값은 value 라는 props를 사용한다. 
  */
  return (
    // <UserContext.Provider value={"리엑트.js"}>
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className="App">
        <Page></Page>
      </div>
    </ThemeContext.Provider>
    // </UserContext.Provider>
  );
}

export default App;
