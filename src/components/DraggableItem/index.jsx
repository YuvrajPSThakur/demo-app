import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DraggableWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
`;

function DraggableItem({ children, dragConstraints }) {
  return (
    <DraggableWrapper
      drag
      dragConstraints={dragConstraints}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </DraggableWrapper>
  );
}

export default DraggableItem;
