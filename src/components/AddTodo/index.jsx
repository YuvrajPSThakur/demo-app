import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const AddButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2196f3;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: #1e88e5;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const Modal = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const ModalContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TaskTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const AddButtonFull = styled.button`
  width: 100%;
  padding: 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e88e5;
  }
`;

function AddTodo({ addTodo }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleSubmit = () => {
    if (newTodoText.trim()) {
      const creationDate = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      addTodo(newTodoText, creationDate);
      setNewTodoText("");
      setIsAdding(false);
    }
  };

  return (
    <>
      <AddButton onClick={handleAdd}>+</AddButton>
      <AnimatePresence>
        {isAdding && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Modal
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}>
              <ModalHeader>
                <CancelButton onClick={() => setIsAdding(false)}>
                  &times;
                </CancelButton>
              </ModalHeader>
              <ModalContent>
                <TaskTextArea
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder='What would you like to add?'
                />
              </ModalContent>
              <AddButtonFull onClick={handleSubmit}>+</AddButtonFull>
            </Modal>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default AddTodo;
