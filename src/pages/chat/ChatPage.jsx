import React, { useState } from 'react';
import { motion } from "framer-motion";
import ListArea from './ListArea';
import MainArea from './MainArea';
import InfoArea from './InfoArea';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};


const ChatPage = () => {

  const [isListOpen, setIsListOpen] = useState(true);  // 왼쪽 사이드바 상태
  const [isInfoOpen, setIsInfoOpen] = useState(true);  // 오른쪽 사이드바 상태

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex h-screen bg-gray-100">

        {/* Left Section - Navigation Area */}
        <ListArea isOpen={isListOpen} toggle={() => setIsListOpen(!isListOpen)}></ListArea>

        {/* Middle Section - Chat Area */}
        <MainArea></MainArea>

        {/* Right Section - Customer Info */}
        <InfoArea></InfoArea>
      </div>
    </motion.div>
  );
};

export default ChatPage;