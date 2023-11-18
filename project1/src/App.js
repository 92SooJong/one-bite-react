import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  }


  const didMountRef = useRef(false);
  useEffect(() => {
    
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  }); // 두번쨰 인수(의존성 배열)에 아무것도 전달하지 않으면 컴포넌트를 렌더링할 때마다 콜백 함수를 실행한다.

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []); // 의존성 배열을 빈 배열로 전달하면 마운트 시점에만 콜백 함수를 실행 함

  useEffect(() => {
    const intervalID = setInterval(() => { // 자바 스크립트 내장 함수이며, 특정 시간 간격으로 콜백 함수를 실행해줌
      console.log("깜빡");
    }, 1000); // 1초 대기후에 콜백 실행

    // useEffect의 클린업 함수. 이 함수는 콜백 함수를 다시 호출하기 전에 실행된다.
    // use칟
    return () => { 
      console.log("클린업");
      clearInterval(intervalID);
    }

  });


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section> {/* section은 영역 분리를 위한 태그임. div와 동일한 기능을 수행함  */}
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  )
}
export default App;
