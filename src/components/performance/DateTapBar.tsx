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

export default function DateTapBar() {
  const location = useLocation();
  const activeDay = new URLSearchParams(location.search).get("day") || "songdo";
  const [activeLocation, setActiveLocation] = useState("all");

  const isSinchon = activeDay === "sinchon1" || activeDay === "sinchon2";

  // ✅ return 문이 반드시 있어야 합니다!
  return (
    <div className="flex">
      {DAY_TABS.map((tab) => {
        const isActive = activeDay === tab.id;
        return (
          <Link
            key={tab.id}
            to={`?day=${tab.id}`}
            replace
            onClick={() => setActiveLocation("all")}
            className={`
              box-border flex flex-1 h-[56px] shrink-0 items-center justify-center
              border-b bg-white px-[16px] py-[12px] text-body-1
              ${isActive ? "border-b-[#1E53FF] text-[#1E53FF]" : "border-b-[#EDEEF0] text-[#ACB1BA]"}
            `}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
