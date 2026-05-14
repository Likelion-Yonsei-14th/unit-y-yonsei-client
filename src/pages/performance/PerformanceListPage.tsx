// src/pages/performance/PerformanceListPage.tsx

import BottomNav from "../../components/common/BottomNav";
import TopBar from "../../components/common/TopBar";
import PerformanceCard from "../../components/performance/PerformanceCard";
import { Link } from "react-router-dom";
import { ALL_PERFORMANCES } from "../../components/performance/PerformanceTeamInformation";
import PerformanceMap from "../../components/performance/PerformanceMaps";
import DateTapBar from "../../components/performance/DateTapBar";

function PerformanceListPage() {
  const livePerformance = ALL_PERFORMANCES.find((perf) => perf.isLive);

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="공연" />

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <DateTapBar />

        {/*상단 라이브 공연 섹션*/}
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
        <PerformanceMap />

        {/* 하단 공연 리스트 섹션 */}

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
