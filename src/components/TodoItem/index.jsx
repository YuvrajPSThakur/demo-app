import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Item = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.completed ? '#E8F5E9' : 'white'};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  cursor: grab;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  color: ${props => props.completed ? '#4CAF50' : '#333'};
  font-weight: ${props => props.completed ? 'normal' : 'bold'};
  font-size: 18px;
  margin-bottom: 4px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.7 : 1};
  transition: all 0.3s ease;
`;

const DueDate = styled.span`
  font-size: 14px;
  color: ${props => props.completed ? '#81C784' : '#888'};
  opacity: ${props => props.completed ? 0.7 : 1};
`;

const DeleteButton = styled.button`
  background-color: #F44336;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  margin-left: 15px;
  transition: all 0.3s ease;
  opacity: ${props => props.completed ? 0.7 : 1};

  &:hover {
    background-color: #D32F2F;
    transform: scale(1.05);
  }
`;

const SwipeIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 8px;
  background-color: ${props => props.direction === 'left' ? '#4CAF50' : '#F44336'};
  border-radius: ${props => props.direction === 'left' ? '0 4px 4px 0' : '4px 0 0 4px'};
`;

const CompletionIcon = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: white;
  font-size: 14px;
`;

const CreationDate = styled.span`
  font-size: 14px;
  color: ${props => props.completed ? '#81C784' : '#888'};
  opacity: ${props => props.completed ? 0.7 : 1};
`;

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['rgba(76, 175, 80, 0.2)', 'rgba(0, 0, 0, 0)', 'rgba(244, 67, 54, 0.2)']
  );
  const leftIndicatorOpacity = useTransform(x, [-100, -10], [1, 0]);
  const rightIndicatorOpacity = useTransform(x, [10, 100], [0, 1]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100 && !todo.completed) {
      toggleTodo(todo.id);
    } else if (info.offset.x > 100 && todo.completed) {
      toggleTodo(todo.id);
    }
  };

  return (
    <Item
      layout
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      style={{ background }}
      completed={todo.completed}
    >
      <SwipeIndicator style={{ left: 0, opacity: leftIndicatorOpacity }} direction="left" />
      <SwipeIndicator style={{ right: 0, opacity: rightIndicatorOpacity }} direction="right" />
      {todo.completed && (
        <CompletionIcon
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          ✓
        </CompletionIcon>
      )}
      <Content>
        <Text completed={todo.completed}>{todo.text}</Text>
        <CreationDate completed={todo.completed}>{todo.creationDate}</CreationDate>
      </Content>
      <DeleteButton onClick={() => deleteTodo(todo.id)} completed={todo.completed}>
        Delete
      </DeleteButton>
    </Item>
  );
}

export default TodoItem;
