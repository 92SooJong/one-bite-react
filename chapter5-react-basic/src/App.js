import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from "./component/Header";

function App() {
  const name = "Joey";
  return (
    <div className='App'>
      <Header/>
      <Body name={name} location={"서울시"}/>
      <Footer/>
    </div>
  );


}

export default App;
