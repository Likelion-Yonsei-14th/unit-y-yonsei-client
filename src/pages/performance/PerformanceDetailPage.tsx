import { useParams } from "react-router-dom";
import BottomNav from "../../components/common/BottomNav";
import { Link } from "react-router-dom";

// 만약 데이터를 찾아서 뿌려줄 예정이라면 상단에서 ALL_PERFORMANCES를 import 하세요!
// import { ALL_PERFORMANCES } from "../../constants/performance";

function TopBar() {
  return (
    <div className="relative flex w-full h-[3.5rem] items-center justify-center bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)] shrink-0">
      {/* 2. 뒤로가기 버튼: absolute left-4를 줘서 왼쪽 벽에서 16px 떨어진 곳에 강제로 고정시킵니다. */}
      <Link
        to="/performance"
        className="absolute left-4 w-6 h-6 flex items-center justify-center active:opacity-70 transition-opacity"
      >
        <img
          src="/booth/chevron-left.svg"
          alt="뒤로가기"
          className="w-full h-full object-contain"
        />
      </Link>

      {/* 3. 타이틀: 부모의 justify-center 덕분에 혼자서 화면 정중앙에 예쁘게 안착합니다. */}
      <div className="text-xl font-bold font-['SUIT_Variable'] leading-6 text-[#1F242C]">
        공연 상세
      </div>
    </div>
  );
}

function PerformanceDetailPage() {
  // 1. URL 파라미터에서 id를 추출합니다 (/performance/:id)
  const { id } = useParams();

  // 2. (선택사항) 추출한 id로 해당 공연의 전체 데이터를 찾을 때 사용하세요.
  // const perf = ALL_PERFORMANCES.find((p) => p.id === Number(id));

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar />

      <main className="flex-1 overflow-y-auto scrollbar-hide"></main>

      <BottomNav />
    </div>
  );
}

export default PerformanceDetailPage;
