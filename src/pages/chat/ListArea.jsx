import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ListArea = ({ isOpen, toggle }) => {
  const [showContent, setShowContent] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 250);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <div className="flex h-screen bg-white shadow-md">
      {/* 사이드바 콘텐츠 */}
      {showContent && isOpen && (
        <div className="p-4 flex-1">
          <button className="w-full bg-gray-900 text-white rounded-md py-2 px-4 flex items-center justify-center gap-2">
            <span>+</span>
            <span>새로운 고객 분석</span>
          </button>
          <div className="flex-1 overflow-y-auto">
            {/* Sidebar Menu Options */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3 py-2 text-gray-700">
                <span><i className="far fa-trash-alt"></i></span>
                <span>Clear conversations</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-gray-700">
                <span><i className="far fa-sun"></i></span>
                <span>Light mode</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-gray-700">
                <span><i className="far fa-user"></i></span>
                <span>My account</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-gray-700">
                <span><i className="far fa-question-circle"></i></span>
                <span>Updates & FAQ</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-gray-700">
                <span><i className="fas fa-sign-out-alt"></i></span>
                <span>Log out</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 버튼을 세로 중앙에 정렬하기 위한 div */}
      <div className="flex items-center justify-center p-2 w-[3rem] h-full">
        <button
          className="w-[2rem] h-[10rem] flex items-center justify-center"
          onClick={toggle}
        >
          {isOpen ? ">" : "<"}
        </button>
      </div>
    </div>
  );
};

export default ListArea;
