import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MBLogo from "../../components/MBLogo";

const InfoArea = () => {
    return (
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-5 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">홍 길동 <span className="text-sm font-normal text-gray-600">고객님</span></h2>
                        <p className="text-gray-500 text-sm">010-1234-1234</p>
                    </div>
                </div>
            </div>

            {/* Customer Status Cards */}
            <div className="p-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3">
                            <span>⚡</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium">자사 출고 고객</div>
                            <div className="text-xs text-gray-500">고객 구분</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                            <span>🚗</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium">GLC-Class</div>
                            <div className="text-xs text-gray-500">GLC 300 4MATIC Coupe</div>
                            <div className="text-xs text-gray-500">현재 오너십</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">
                            <span>✓</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium">전시장 내방</div>
                            <div className="text-xs text-gray-500">최근 방문 경로</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mr-3">
                            <span>🔥</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium">WARM</div>
                            <div className="text-xs text-gray-500">관심 단계</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">
                            <span>✓</span>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-gray-500">Options</div>
                            <div className="text-sm">C 200 19년식 중형 S/E클래스 감성 옵션과 / 구매 시기 3개월 이내/ AMG 라인 안됨/ 험한 도로 하지 않음/ 사고 표준요건 적합 기능</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3 border-t border-gray-200">
                <h3 className="text-sm font-medium mb-2">자차 보유 차량 목록</h3>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                    <div className="flex items-start">
                        <div className="w-10 h-10 mr-3">
                            <MBLogo className=" h-[2rem]"></MBLogo>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-medium">GLC-Class</div>
                                    <div className="text-sm text-gray-600">GLC 300 4MATIC Coupe</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">121번2743</div>
                                    <div className="text-sm text-gray-600">판매대리점 본점</div>
                                </div>
                            </div>

                            <div className="mt-2 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>출고일</span>
                                    <span>예상 만기일</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>2022-01-22</span>
                                    <span>2027-01-22</span>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="bg-gray-200 h-2 rounded-full">
                                    <div className="bg-orange-500 h-2 rounded-full w-1/4"></div>
                                </div>
                                <div className="text-right text-sm mt-1">28%</div>
                            </div>

                            <div className="mt-2 text-sm">
                                <div>외장색상 Nautic Blue</div>
                                <div>내장색상 ARTICO crystal grey</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3 border-t border-gray-200">
                <h3 className="text-sm font-medium mb-3">추천 차량 목록</h3>

                <div className="mb-3">
                    <h4 className="text-xs text-gray-500 mb-2">관심 차량과 비슷한 차량</h4>

                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                        <div className="flex items-center">
                            <div className="w-10 h-10 mr-3">
                                <MBLogo className=" h-[2rem]"></MBLogo>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">GLE 450 4MATIC Coupe</div>
                                <div className="mt-1">
                                    <div className="bg-green-200 h-2 rounded-full">
                                        <div className="bg-green-500 h-2 rounded-full w-11/12"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2">
                                <span className="text-green-600 font-medium">95% Correct</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <h4 className="text-xs text-gray-500 mb-2">30대 남성 고객들이 많이 선택한 차량</h4>

                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                        <div className="flex items-center">
                            <div className="w-10 h-10 mr-3">
                                <MBLogo className=" h-[2rem]"></MBLogo>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">GLE 53 AMG Coupe</div>
                                <div className="mt-1">
                                    <div className="bg-green-200 h-2 rounded-full">
                                        <div className="bg-green-500 h-2 rounded-full w-10/12"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2">
                                <span className="text-green-600 font-medium">90% Correct</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center">
                            <div className="w-10 h-10 mr-3">
                                <MBLogo className=" h-[2rem]"></MBLogo>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">GLE 53 AMG Coupe</div>
                                <div className="mt-1">
                                    <div className="bg-green-200 h-2 rounded-full">
                                        <div className="bg-green-500 h-2 rounded-full w-9/12"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2">
                                <span className="text-green-600 font-medium">87% Correct</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoArea;