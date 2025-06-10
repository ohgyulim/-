import BasicInfoForm from "./components/BasicInfoForm";

export default function Home() {
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
      <BasicInfoForm />
    </div>
  );
}
