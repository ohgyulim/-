"use client";

import { useState } from "react";
import SeoulModal from "./SeoulModal";

export default function BasicInfoForm() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const clickModal = () => setShowModal((prev) => !prev);

  return (
    <section className="bg-white p-10 rounded-2xl shadow-md max-w-5xl mx-auto mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        기본 정보 입력
      </h2>
      <form className="flex flex-wrap gap-4 items-end">
        {/* 출생연도 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">출생연도</label>
          <input
            type="date"
            defaultValue="1999-01-01"
            className="w-40 px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* 거주지 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">거주지(구)</label>
          <button
            type="button"
            onClick={clickModal}
            className="w-40 px-3 py-2 border rounded-md text-sm text-left"
          >
            {selectedDistrict || "구 선택"}
          </button>
          {showModal && (
            <SeoulModal
              clickModal={clickModal}
              setSelectedDistrict={setSelectedDistrict}
            />
          )}
        </div>

        {/* 참여 정책 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">참여 중인 정책</label>
          <input
            type="text"
            placeholder="예: 청년수당"
            className="w-40 px-3 py-2 border rounded-md text-sm"
          />
        </div>

        {/* 검색 버튼 */}
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-md ml-auto"
        >
          <span className="material-icons text-base">search</span>
          검색하기
        </button>
      </form>
    </section>
  );
}
