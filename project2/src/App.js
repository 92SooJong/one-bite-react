import { useState, useRef } from "react"
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

function App() {

  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

  // Todo Item을 수정하기 위한 함수
  const onUpdate = (targetId) => {
    setTodo( 
      // targetId를 가지는 Todo Item 상태를 변경하는 로직
      todo.map(
        (it) => it.id === targetId ? {...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }



  return (
    <div className="App">
      <TestComp></TestComp>
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  );
}

export default App;
