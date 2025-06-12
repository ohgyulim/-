"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SearchNav() {
  const [sortOrder, setSortOrder] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("전체 분야");
  const [region, setRegion] = useState("전체 지역");
  const [status, setStatus] = useState("전체 상태");

  const sortOptions = ["최신순", "관련도순", "등록순"];

  return (
    <div className="bg-gray-50 px-6 py-10">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>정렬:</span>
          <Dropdown
            value={sortOrder}
            setValue={setSortOrder}
            options={sortOptions}
            small
          />
        </div>
      </div>

      {/* 검색 필터 바 */}
      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-wrap gap-2 items-center max-w-5xl mx-auto">
        {/* 검색창 */}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="정책명을 입력하세요"
          className="flex-1 min-w-[160px] px-4 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 placeholder-gray-400"
        />

        {/* 드롭다운: 분야 */}
        {/* <Dropdown
          value={category}
          setValue={setCategory}
          options={["전체 분야", "주거", "일자리", "교육"]}
        /> */}
        {/* 드롭다운: 지역 */}
        {/* <Dropdown
          value={region}
          setValue={setRegion}
          options={["전체 지역", "서울", "경기", "부산"]}
        /> */}
        {/* 드롭다운: 상태 */}
        {/* <Dropdown
          value={status}
          setValue={setStatus}
          options={["전체 상태", "신청 가능", "마감"]}
        /> */}

        {/* 검색 버튼 */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition">
          검색
        </button>
      </div>
    </div>
  );
}

// 공통 드롭다운 컴포넌트
function Dropdown({ value, setValue, options, small = false }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`appearance-none pr-8 ${
          small ? "min-w-[100px]" : "min-w-[120px]"
        } px-4 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 text-gray-700`}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}
