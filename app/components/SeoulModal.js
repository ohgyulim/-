"use client";

const districts = [
  "선택안함",
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

export default function SeoulModal({ clickModal, setSelectedDistrict }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center"
      onClick={clickModal}
    >
      <div
        className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-lg p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          자치구 선택
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto text-gray-700 text-base">
          {districts.map((d) => (
            <li
              key={d}
              className="border border-gray-200 rounded-lg px-4 py-2 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition"
              onClick={() => {
                setSelectedDistrict(d);
                clickModal();
              }}
            >
              {d}
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-8">
          <button
            onClick={clickModal}
            className="px-6 py-2 text-base font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
