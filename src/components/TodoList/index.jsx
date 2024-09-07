import React, { useMemo } from 'react';
import TodoItem from '../TodoItem';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const List = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function TodoList({ todos, toggleTodo, deleteTodo }) {
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  }, [todos]);

  return (
    <List>
      <AnimatePresence>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </List>
  );
}

export default TodoList;
