import BasicInfoForm from "./components/BasicInfoForm";
import PolicyCard from "./components/PolicyCard";

export default function Home() {
  // Todo: 서버에서 가져오기
  let policies = [
    {
      index: 1,
      likes: false,
      name: "정책1",
      district: "광진구",
      content: "11만원 지원함",
      target: "만 19세 ~ 만 24세 이하",
      startDate: "2024-01-01",
      endDate: "2024-02-02",
    },
    {
      index: 2,
      likes: false,
      name: "정책2",
      district: "용산구",
      content: "22만원 지원함",
      target: "만 19세 ~ 만 24세 이하",
      startDate: "2024-01-01",
      endDate: "2024-02-02",
    },
    {
      index: 3,
      likes: false,
      name: "정책2",
      district: "종로구",
      content: "33만원 지원함",
      target: "만 19세 ~ 만 24세 이하",
      startDate: "2024-01-01",
      endDate: "2024-02-02",
    },
  ];

  return (
    <div>
      <section className="text-center py-8 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          서울 청년 정책 추천 서비스
        </h2>
        <p className="text-lg text-gray-600">
          내 조건에 맞는 현재 신청 가능한 정책을 찾아보세요
        </p>
      </section>
      <section className="bg-white p-10 rounded-2xl shadow-md max-w-5xl mx-auto mt-6 pb-30">
        <BasicInfoForm />

        <div className="flex pt-50 gap-10">
          {policies.map((policy, i) => {
            return <PolicyCard policyInfo={policy} key={i} />;
          })}
        </div>
      </section>
    </div>
  );
}
