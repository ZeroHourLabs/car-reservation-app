import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MBLogo from "../../components/MBLogo";
import ListArea from "./ListArea";


const ChatGuide = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        {/* Header with Mercedes Logo */}
        <div className="p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 mb-2">
            <MBLogo className=" h-[4rem]"></MBLogo>
          </div>
          <h2 className="text-xl font-normal mt-2">무엇을 도와드릴까요?</h2>
        </div>

        {/* Chat Features */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex gap-6 mb-8">
            {/* Customer Info Feature */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <span className="text-xl">👤</span>
                </div>
              </div>
              <h3 className="text-center font-medium mb-1">고객정보 기반 추천</h3>
              <p className="text-center text-sm text-gray-500">고객님의 기본 정보를 기반으로 배송된 조건의 고객들이 선호하는 차량을 추천합니다.</p>
            </div>

            {/* Preference Feature */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <span className="text-xl">❤️</span>
                </div>
              </div>
              <h3 className="text-center font-medium mb-1">관심 차량 기반 추천</h3>
              <p className="text-center text-sm text-gray-500">고객님이 관심있어하는 차량과 비슷한 차량들을 추천합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MainArea = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
   
      <ChatGuide></ChatGuide>
      {/* Message Input */}
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-1 border rounded-lg bg-gray-50 flex">
            <button className="p-2 text-gray-400">
              <span>🎤</span>
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message"
              className="flex-1 px-3 py-2 bg-transparent outline-none"
            />
            <button className="p-2 text-gray-400">
              <span>📎</span>
            </button>
          </div>
          <button className="ml-2 p-2 text-blue-500">
            <span>➤</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export default MainArea;