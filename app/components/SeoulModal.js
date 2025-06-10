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
      className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center"
      onClick={clickModal}
    >
      <div
        className="bg-white w-full max-w-3xl mx-4 rounded-2xl shadow-xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          자치구 선택
        </h2>

        <ul className="grid grid-cols-4 gap-3 max-h-[400px] overflow-y-auto text-gray-700 text-sm">
          {districts.map((d) => (
            <li
              key={d}
              className="border rounded-lg px-4 py-2 text-center cursor-pointer hover:bg-blue-100 transition"
              onClick={() => {
                setSelectedDistrict(d);
                clickModal();
              }}
            >
              {d}
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-6">
          <button
            onClick={clickModal}
            className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
