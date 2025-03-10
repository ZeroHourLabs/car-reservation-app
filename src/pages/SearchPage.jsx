import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [interest, setInterest] = useState("");
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const handleClick = () => {
    if (isNewCustomer) {
      // 신규 고객 로직
      console.log("new customer")
    } else {
      // 기존 고객 로직
      console.log("existing-customer")
    }
    navigate("/chat");
  };


  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-sky-200 p-4">
      <div className="relative w-full max-w-6xl">
        {/* 배경 원 애니메이션 */}
        <motion.div
          className="absolute top-[-7rem] right-1/2 lg:right-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-teal-400 to-blue-500"
          animate={{ x: isNewCustomer ? -100 : 0, y: isNewCustomer ? 50 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 right-[-1rem] h-48 w-48 rounded-full bg-gradient-to-b from-[#967CFD] to-[#3177FF] opacity-70"
          animate={{ x: isNewCustomer ? 80 : 0, y: isNewCustomer ? -50 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-5 right-[-3rem] h-36 w-36 rounded-full bg-gradient-to-br from-[#3177FF] to-[#8BFEE9] opacity-70"
          animate={{ x: isNewCustomer ? 100 : 0, y: isNewCustomer ? 60 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col justify-center p-8 lg:w-1/2 relative z-10">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">차량 추천 시스템</h1>
            <div className="text-gray-600 text-lg">
              <p>Vehicle Recommendation System</p>
              <p>Based on Customer Data</p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <motion.div
              className="relative bg-white bg-opacity-50 rounded-3xl p-8 shadow-lg border border-blue-200 w-full max-w-md backdrop-blur-sm"
              animate={{ height: isNewCustomer ? 560 : 360 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* 상단 "고객 조회" 텍스트 */}
              <div className="absolute -top-6 left-8 bg-blue-600 rounded-xl py-2 px-4 text-lg font-semibold z-10 text-white">
                {isNewCustomer ? "고객 등록" : "고객 조회"}
              </div>

              {/* 고객 유형 전환 버튼 */}
              <button
                onClick={() => setIsNewCustomer(!isNewCustomer)}
                className="absolute top-4 right-8 text-sm text-blue-500 cursor-pointer bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {isNewCustomer ? "기존 고객이신가요?" : "신규 고객이신가요?"}
              </button>

              {/* 입력 필드와 버튼을 감싸는 flexbox 컨테이너 */}
              <div className="mt-10 space-y-6 flex flex-col justify-between h-full">
                <AnimatePresence mode="wait">
                  {!isNewCustomer ? (
                    <motion.div
                      key="existing-customer"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">이름</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">전화번호</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="new-customer"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ opacity: { duration: 0.2 }, y: { duration: 0.2 } }}
                    >
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">이름</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">전화번호</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">생년월일</label>
                        <input
                          type="date"
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-gray-700 mb-2">관심 차종</label>
                        <select
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                        >
                          <option value="">선택하세요</option>
                          <option value="GLC">GLC</option>
                          <option value="GLE">GLE</option>
                          <option value="S-Class">S-Class</option>
                          <option value="E-Class">E-Class</option>
                        </select>
                        <span className="absolute right-3 top-[68%] transform -translate-y-1/2 pointer-events-none">
                          ▼
                        </span>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 버튼 애니메이션 */}
                <motion.div
                  key="submit-button"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 absolute bottom-5 left-0 right-0 flex justify-center"
                >
                  <button
                    className="w-[90%] max-w-md bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-200 mt-4"
                    onClick={handleClick}
                  >
                    {isNewCustomer ? "등록" : "조회"}
                  </button>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
