import { getEmotionImgById } from "./util";


function App() {
  return (
    <div className="App">
      <img alt="감정1" src={getEmotionImgById(1)}></img>
      <img alt="감정2" src={getEmotionImgById(2)}></img>
      <img alt="감정3" src={getEmotionImgById(3)}></img>
      <img alt="감정4" src={getEmotionImgById(4)}></img>
      <img alt="감정5" src={getEmotionImgById(5)}></img>
    </div>
  );
}

export default App;
