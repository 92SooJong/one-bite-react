import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from "./component/Header";

function App() {
  
  const BodyProps = {
    name : "Joey",
    location : "서울시 성동구",
    favorList: ["파스타", "빵", "떡볶이"],
  };


  return (
    <div className='App'>
      <Header/>
      <Body {...BodyProps}/>
      <Footer/>
    </div>
  );


}

export default App;
