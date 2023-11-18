import { useEffect, useState } from 'react';
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

  useEffect(() => { // 첫번쨰 인수로 콜백 함수, 두번쨰 인수로 의존성 배열
    console.log("count 업데이트 : ", count);
  }, [count]); // useEffect는 의존성 배열이 변경되면 콜백 함수를 실행하도록 동작함.

  useEffect(() => {
    console.log("업데이트 : ", text, count);
  }, [count, text]);

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
