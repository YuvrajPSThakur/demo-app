import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const AppContainer = styled(motion.div)`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const TaskCount = styled.p`
  font-size: 14px;
  color: #888;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('/aiony-haust-3TLl_97HNJo-unsplash.jpg');
  background-size: cover;
  background-position: center;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, dueDate) => {
    setTodos([...todos, { id: Date.now(), text, dueDate, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <AppContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <div>
          <Title>Hello Floyd Mullins</Title>
          <TaskCount>You have {todos.length} tasks</TaskCount>
        </div>
        <Avatar />
      </Header>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <AddTodo addTodo={addTodo} />
    </AppContainer>
  );
}

export default App;
