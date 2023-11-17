import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section> {/* section은 영역 분리를 위한 태그임. div와 동일한 기능을 수행함  */}
        <Viewer/>
      </section>
      <section>
        <Controller/>
      </section>
    </div>
  )
}
export default App;
