"use client";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Detail(props) {
  const index = props.params.index;
  const data = {
    likes: false,
    name: "[예시] 청년 월세 지원",
    district: "광진구",
    content: "최대 월 20만 원 지원 / 최대 12개월",
    target: "서울 거주 만 19~34세 무주택 청년",
    startDate: "2025.06.01",
    endDate: "2025.06.30",
    detail:
      "서울시가 청년 주거 안정을 위해 제공하는 월세 지원 정책입니다. 신청 자격을 충족하면 최대 20만 원까지 월세를 지원받을 수 있습니다. 자세한 신청 방법, 제출 서류 등은 아래 내용을 참고해주세요.",
    documents: ["신분증 사본", "주민등록등본", "임대차계약서 사본"],
    phone: "서울시 청년주거정책과 / 02-1234-5678",
    url: "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?key=2309150002&plcyBizId=20250316005400210629",
  };

  const [likesState, setLikesState] = useState(data.likes);
  const toggleLike = () => setLikesState(!likesState);

  return (
    <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-md max-w-4xl mx-auto mt-10 mb-20">
      {/* 상단 제목 + 찜 */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-sm font-semibold text-red-600 mb-1">
            신청마감 D-24
          </p>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
            <span className="text-xs px-2 py-0.5 rounded-full border border-gray-300 text-gray-500">
              {data.district}
            </span>
          </div>
        </div>
        <button onClick={toggleLike}>
          {likesState ? (
            <AiFillHeart className="text-red-500 text-3xl" />
          ) : (
            <AiOutlineHeart className="text-gray-400 text-3xl hover:text-red-500" />
          )}
        </button>
      </div>

      {/* 상세 내용 */}
      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <InfoCard title="지원 내용" content={data.content} />
        <InfoCard title="지원 대상" content={data.target} />
        <InfoCard
          title="신청 기간"
          content={`${data.startDate} ~ ${data.endDate}`}
        />
        <InfoCard title="정책 설명" content={data.detail} />
        <InfoCard
          title="제출 서류"
          content={
            <ul className="list-disc list-inside pl-1">
              {data.documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          }
        />
        <InfoCard title="문의처" content={data.phone} />
      </div>

      {/* 신청 버튼 */}
      <div className="text-center mt-10">
        <Link href={data.url}>
          <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-base sm:text-lg rounded-md shadow transition">
            신청하러 가기
          </button>
        </Link>
      </div>
    </section>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="bg-gray-50 px-5 py-4 rounded-lg">
      <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-sm">{content}</div>
    </div>
  );
}
