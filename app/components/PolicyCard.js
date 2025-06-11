"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function PolicyCard({ policyInfo }) {
  const [likesState, setLikesState] = useState(policyInfo.likes);
  const changeLikesState = () => setLikesState(!likesState);
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-70 relative">
      {/* 상단 상태 및 아이콘 */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-sm font-semibold">
            신청마감 D-24
          </span>
          <span className="text-gray-500 text-xs border border-gray-300 rounded px-2 py-0.5">
            {policyInfo.district}
          </span>
        </div>
        {/* Todo: likes 상태 로컬 스토리지에 저장 */}
        <button onClick={changeLikesState}>
          {likesState ? (
            <AiFillHeart className="text-red-500" size={20} />
          ) : (
            <AiOutlineHeart className="text-red-500" size={20} />
          )}
        </button>
      </div>

      {/* 제목 */}
      <h3 className="text-md font-bold mb-1">{policyInfo.name}</h3>

      {/* 지원 내용 */}
      <p className="text-sm text-gray-700 mb-1">{policyInfo.content}</p>

      {/* 대상 */}
      <p className="text-sm text-gray-600 mb-1">대상: {policyInfo.target}</p>

      {/* 기간 */}
      <p className="text-sm text-gray-400 mb-4">
        신청 기간: {policyInfo.startDate} ~ {policyInfo.endDate}
      </p>

      {/* 버튼 */}
      <Link href={`/detail/${policyInfo.index}`}>
        <button className="cursor-pointer w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl">
          자세히 보기
        </button>
      </Link>
    </div>
  );
}
