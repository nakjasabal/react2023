import './App.css';
import { firestore } from './firestoreConfig';
import { collection, getDocs } from "firebase/firestore"; 
import { useState } from 'react';

function App() {
  const [showData, setShowData] = useState([]);

  const getCollection = async () => {
    let trArray = [];
    const querySnapshot = await getDocs(collection(firestore, "members"));
    querySnapshot.forEach((doc) => {
      /**
      doc.id : 문서명. 여기서는 사용자 아이디.
      doc.data() : 도큐먼트. 여기서는 회원 정보.
       */
      console.log(doc.id, " => ", doc.data());  
      let memberInfo = doc.data();
      //console.log("파싱", doc.id, memberInfo.pass, memberInfo.name, memberInfo.regdate)
      trArray.push (
        <tr key={doc.id}>
          <td className="cen">{doc.id}</td>
          <td className="cen">{memberInfo.pass}</td>
          <td className="cen">{memberInfo.name}</td>
          <td className="cen">{memberInfo.regdate}</td>
        </tr>  
      );
    });
    //여기서 State 변경
    setShowData(trArray);
  }

  return (
    <div className="App">
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>전체조회하기</h3>
      <button type='button' onClick={getCollection}>전체조회</button>
      <table className='table table-bordered'>
        <thead>
          <tr className='text-center'>
            <th>아이디</th><th>비밀번호</th><th>이름</th><th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
    </div>
  );
}

export default App;
