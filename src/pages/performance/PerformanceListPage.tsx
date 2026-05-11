// src/pages/performance/PerformanceListPage.tsx

import BottomNav from "../../components/common/BottomNav";
import TopBar from "../../components/common/TopBar";
import PerformanceCard from "../../components/performance/PerformanceCard";
import { Link } from "react-router-dom";

// 임시 데이터 (나중에 constants 폴더로 빼셔도 됩니다!)
const ALL_PERFORMANCES = [
  {
    id: 1,
    title: "연세 밴드부 YB",
    time: "18:00 ~ 18:40",
    location: "백양로 메인 무대",
    tags: ["인디", "JPOP"],
    isLive: false,
  },
  {
    id: 2,
    title: "다른 공연팀",
    time: "19:00 ~ 19:40",
    location: "노천극장",
    tags: ["댄스"],
    isLive: false,
  },
  {
    id: 3,
    title: "다른 공연팀",
    time: "19:00 ~ 19:40",
    location: "노천극장",
    tags: ["댄스"],
    isLive: true,
  },
  {
    id: 4,
    title: "다른 공연팀",
    time: "19:00 ~ 19:40",
    location: "노천극장",
    tags: ["댄스"],
    isLive: false,
  },
  {
    id: 5,
    title: "다른 공연팀",
    time: "19:00 ~ 19:40",
    location: "노천극장",
    tags: ["댄스"],
    isLive: false,
  },
];

function PerformanceListPage() {
  const livePerformance = ALL_PERFORMANCES.find((perf) => perf.isLive);

  return (
    // 전체 컨테이너: 부스 페이지와 동일
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="공연" />

      {/* main 태그: 스크롤 영역 관리. 단, 배경이 끝까지 차야 하므로 px는 내부에서 줍니다 */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {/* ======================================= */}
        {/* 1. 상단 라이브 섹션 (배경 꽉 채우기) */}
        {/* ======================================= */}
        {livePerformance && (
          <section className="bg-gradient-to-b from-[#7052FF] to-[#FF40A5] pb-[1.25rem]">
            {/* px-4(16px)를 주어 내부 카드가 358px이 되도록 부스 페이지와 맞춤! */}
            <div className="px-4">
              <p className="py-5 text-[20px] font-bold leading-[130%] tracking-[-0.4px] text-white">
                현재 진행 중인 공연
              </p>
              <Link
                to={`/performance/${livePerformance.id}`}
                className="block active:opacity-70 transition-opacity"
              >
                <PerformanceCard
                  title={livePerformance.title}
                  time={livePerformance.time}
                  location={livePerformance.location}
                  tags={livePerformance.tags}
                  isLive={livePerformance.isLive}
                />
              </Link>
            </div>
          </section>
        )}

        <div className="self-stretch px-4 py-5 bg-white inline-flex justify-start items-center gap-28">
          <div className="justify-start text-xl font-bold font-['SUIT_Variable'] leading-6">
            공연 타임테이블
          </div>
        </div>

        {/* ======================================= */}
        {/* 2. 하단 공연 리스트 섹션 */}
        {/* ======================================= */}
        <section className="flex flex-col">
          {ALL_PERFORMANCES.map((perf) => (
            <div
              key={perf.id}
              className={`flex w-full flex-col py-4 border-l-[4px] ${
                perf.isLive
                  ? "border-[#7052FF] bg-gradient-to-r from-[#F1EEFF] to-[#FFECF6]"
                  : "border-[#868D9A] bg-white"
              }`}
            >
              {/* 💡 막내의 필살기 수학 계산!
                왼쪽에 테두리 4px이 있기 때문에,
                왼쪽 여백을 12px(pl-[12px])만 주고 오른쪽을 16px(pr-4)을 주면, 
                양옆 여백이 완벽하게 16px로 대칭이 되어 카드가 정확히 358px로 떨어집니다!
              */}
              <div className="flex flex-col gap-[0.5rem] pl-[12px] pr-4">
                <p className="text-[#4A5568] text-xs font-normal">
                  {perf.time}
                </p>
                <Link
                  to={`/performance/${perf.id}`}
                  className="block active:opacity-70 transition-opacity"
                >
                  <PerformanceCard
                    title={perf.title}
                    time={perf.time}
                    location={perf.location}
                    tags={perf.tags}
                    isLive={perf.isLive}
                  />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default PerformanceListPage;
