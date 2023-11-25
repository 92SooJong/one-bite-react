import { useRef, useReducer } from "react"
import './App.css';
import Header from './component/Header';
import TestComp from "./component/TestComp";
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';


const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),   
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),   
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),   
  },
]

function reducer(state, action) {
  // 상태 변화 코드
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) => it.id === action.targetId ? {...it, isDone: !it.isDone} : it);
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId)
    }
    default:
      return state;
  }
}


function App() {

  const idRef = useRef(3);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    
    idRef.current += 1;
  }

  // Todo Item을 수정하기 위한 함수
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }



  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  );
}

export default App;
