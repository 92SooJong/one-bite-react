import { useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {

  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
