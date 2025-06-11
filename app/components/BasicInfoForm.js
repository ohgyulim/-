"use client";

import { useState } from "react";
import SeoulModal from "./SeoulModal";
import PolicyModal from "./PolicyModal";
import { IoSearchOutline } from "react-icons/io5";

export default function BasicInfoForm() {
  const [showSeoulModal, setShowSeoulModal] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState([]);

  const clickSeoulModal = () => setShowSeoulModal((prev) => !prev);
  const clickPolicyModal = () => setShowPolicyModal((prev) => !prev);

  return (
    <div>
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
            className="w-40 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-500"
          />
        </div>

        {/* 거주지 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">거주지(구)</label>
          <button
            type="button"
            onClick={clickSeoulModal}
            className="flex w-40 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-500"
          >
            {selectedDistrict || "구 선택"}
          </button>
          {showSeoulModal && (
            <SeoulModal
              clickSeoulModal={clickSeoulModal}
              setSelectedDistrict={setSelectedDistrict}
            />
          )}
        </div>

        {/* 참여 정책 */}
        <div className="flex flex-col w-70 relative">
          <label className="text-sm text-gray-700 mb-1">
            현재 참여 중인 정책 (선택)
          </label>

          {/* 검색 버튼 (모달 열기용) */}
          <button
            type="button"
            onClick={clickPolicyModal}
            className="flex items-center px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-500"
          >
            <IoSearchOutline size={18} className="text-gray-400" />
            <span className="ml-2">검색해서 선택하기</span>
          </button>

          {/* 선택된 정책 리스트 (절대 위치) */}
          {selectedPolicies.length > 0 && (
            <div className="absolute top-full mt-2 flex flex-wrap gap-2 z-10 bg-white">
              {selectedPolicies.map((policy, index) => (
                <span
                  key={index}
                  className="flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm"
                >
                  {policy}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPolicies((prev) =>
                        prev.filter((p) => p !== policy)
                      )
                    }
                    className="ml-1 text-blue-400 hover:text-blue-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 모달 */}
        {showPolicyModal && (
          <PolicyModal
            clickPolicyModal={clickPolicyModal}
            setSelectedPolicies={setSelectedPolicies}
          />
        )}

        {/* 검색 버튼 */}
        <button
          type="button"
          className="flex items-center gap-2 px-10 py-3 text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-md ml-auto"
        >
          검색하기
        </button>
      </form>
    </div>
  );
}
