import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DAY_TABS = [
  { id: "songdo", label: "5/27 송도" },
  { id: "sinchon1", label: "5/28 신촌" },
  { id: "sinchon2", label: "5/29 신촌" },
];

const LOCATION_TABS = [
  { id: "all", label: "전체" },
  { id: "nocheon", label: "노천극장" },
  { id: "dongmun", label: "동문광장" },
];

const MAP_IMAGES = {
  songdo: "/booth/performance/map-songdo.svg",
  sinchon_all: "/booth/performance/map-sinchon-all.svg",
  sinchon_nocheon: "/booth/performance/map-sinchon-nocheon.svg",
  sinchon_dongmun: "/booth/performance/map-sinchon-dongmun.svg",
};

export default function PerformanceMap() {
  const location = useLocation();
  const activeDay = new URLSearchParams(location.search).get("day") || "songdo";
  const [activeLocation, setActiveLocation] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 지도를 열고 닫는 상태

  const isSinchon = activeDay === "sinchon1" || activeDay === "sinchon2";
  const mapKey = isSinchon ? `sinchon_${activeLocation}` : activeDay;
  const currentMap = MAP_IMAGES[mapKey];

  return (
    <div>
      {/* 하위 장소 탭 (신촌일 때만) */}
      {isSinchon && (
        <div className="flex gap-2 px-4 py-3 pt-0 pb-4">
          {LOCATION_TABS.map((tab) => {
            const isActive = activeLocation === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLocation(tab.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold transition-colors
                  ${isActive ? "bg-[#1E53FF] text-white" : "bg-gray-100 text-gray-500"}
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* 헤더 토글 버튼 섹션 */}
      <div className="w-full mt-0 px-4 bg-white">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="self-stretch px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-100 inline-flex justify-between items-center w-full transition-colors hover:bg-gray-50"
        >
          <div className="flex justify-start items-center gap-1">
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C7.239 2 5 4.239 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.761-2.239-5-5-5z"
                stroke="#2563EB"
                strokeWidth="1.4"
                fill="none"
              />
              <circle
                cx="10"
                cy="7"
                r="1.8"
                stroke="#2563EB"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            <span className="text-black/60 text-sm font-normal leading-5 font-['SUIT_Variable']">
              공연 장소 안내 지도
            </span>
          </div>
          {/* 토글 상태에 따른 아이콘 회전 */}
          <img
            src="/booth/chevron-bottom-gray.svg"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            alt="toggle"
          />
        </button>
      </div>

      {/* 부드럽게 열리는 지도 영역 */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
      >
        <div className="overflow-hidden mx-4">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 mb-4">
            <img
              src={currentMap}
              alt="공연 장소 안내 지도"
              className="w-full object-cover"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute inset-0 w-full h-full bg-transparent cursor-pointer"
              aria-label="지도 확대하기"
            />
          </div>
        </div>
      </div>

      {/* 확대 모달 (기존 디자인 유지) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative mx-4 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentMap}
              alt="공연 장소 안내 지도 확대"
              className="w-full rounded-2xl"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="#1F242C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
