import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType = {
  userId: number, id: number, title: string, completed: boolean
}

function App() {
  const [todos, setTodos] = useState<PropsType[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])

  const onclickHandler = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <button onClick={onclickHandler}>new posts</button>
      <ul>
        {
          todos.map(todo => {
            return (
              <li>{todo.id}- {todo.title}</li>
            )
          })
        }
      </ul>


    </div>
  );
}


export default App;
