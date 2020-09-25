import React, {useState, useEffect} from 'react';
import moment from "moment";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [{}]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [currentDate, setCurrentDate] = useState('');
  //function
  const updateFilter = () => {
    if (filter === 'all') {
      setFilteredTodos(todos);
    } else if (filter === 'completed') {
      setFilteredTodos(todos.filter((el) => el.completed === true));
    } else {
      setFilteredTodos(todos.filter((el) => el.completed !== true));
    }
  };

  const setLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  //useEffect
  useEffect(() =>{
    updateFilter();
    setLocalTodos();
  }, [todos, filter]);

  useEffect(() => {
    // Update the document title using the browser API
    setCurrentDate(moment().format("DD-MM-YYYY"));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Hello Sam!</h1>
      </header>
      <h2>What's for {currentDate}?</h2>
      <Form setTodos={setTodos} todos={todos}
            setInputText={setInputText} inputText={inputText}
            setFilter={setFilter}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
