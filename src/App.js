import './App.css';
import TodoList from './components/TodoList';
import React from 'react';



function App() {
  return (
    <div className="App">
      {/*<header className="App-header"></header>*/}
      <h1>TODO APP</h1>
      <TodoList />
    </div>
  );
}

export default App;
