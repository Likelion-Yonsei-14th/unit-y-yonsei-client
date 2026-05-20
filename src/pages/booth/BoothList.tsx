import { useEffect, useState } from "react";
import TopBar from "../../components/common/TopBar";
import TabBar from "../../components/common/TabBar";
import SearchBar from "../../components/common/SearchBar";
import FilterChip from "../../components/common/FilterChip";
import BoothCard from "../../components/booth/BoothCard";
import BottomNav from "../../components/common/BottomNav";
import { useNavigate } from "react-router-dom";
import MapAccordion from "../../components/common/MapAccordion";
import { getBooths } from "../../apis/booth";
import type { BoothResponse } from "../../apis/types/booth";


const DATE_TABS = [
  { id: "2", label: "5/27 송도" },
  { id: "3", label: "5/28 신촌" },
  { id: "4", label: "5/29 신촌" },
];

const FILTER_CHIPS = [
  { id: "all", label: "전체" },
  { id: "booth", label: "부스" },
  { id: "foodtruck", label: "푸드트럭" },
];

const LOCATION_CHIPS: Record<string, { id: string; label: string }[]> = {
  "2": [],
  "3": [
    { id: "all", label: "전체" },
    { id: "백양로", label: "백양로" },
    { id: "한글탑", label: "한글탑" },
  ],
  "4": [
    { id: "all", label: "전체" },
    { id: "백양로", label: "백양로" },
    { id: "한글탑", label: "한글탑" },
  ],
};

function BoothList() {
  const [activeTab, setActiveTab] = useState("2");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");
  const [booths, setBooths] = useState<BoothResponse[]>([]);

  const navigate = useNavigate();

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setActiveLocation("all");
    setActiveFilter("all");
  }

  useEffect(() => {
    const fetchBooths = async () => {
      try {

        const sector =
          activeTab === "2"
            ? "송도"
            : activeLocation === "all"
              ? undefined
              : activeLocation;
              
        const data = await getBooths({
          date: Number(activeTab),
          sector,
          isFood:
            activeFilter === "all"
              ? undefined
              : activeFilter === "foodtruck",
        });

        setBooths(data);
      } catch (error) {
        console.error("부스 목록 조회 실패", error);
      }
    };

    fetchBooths();
  }, [activeTab, activeLocation, activeFilter]);

  const locationChips = LOCATION_CHIPS[activeTab] ?? [];

  const filteredBooths = booths.filter((booth) =>
    booth.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar title="부스" />
      <TabBar tabs={DATE_TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 pt-4 flex flex-col gap-3">
          {locationChips.length > 0 && (
            <div className="flex gap-2">
              {locationChips.map((chip) => (
                <FilterChip
                  key={chip.id}
                  label={chip.label}
                  selected={activeLocation === chip.id}
                  onClick={() => setActiveLocation(chip.id)}
                />
              ))}
            </div>
          )}

          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <MapAccordion/>
        </div>

        <div className="px-5 pt-3 pb-3 flex gap-2">
          {FILTER_CHIPS.map((chip) => (
            <FilterChip
              key={chip.id}
              label={chip.label}
              selected={activeFilter === chip.id}
              onClick={() => setActiveFilter(chip.id)}
            />
          ))}
        </div>

        <div className="px-5 pb-6">
          {filteredBooths.length === 0 ? (
            <div className="flex flex-col items-center pt-10">
              <img
                src="/character/no-result-character.svg"
                alt=""
                className="w-[148px] h-[150px]"
              />

              <p className="mt-4 text-heading-2 text-[#4A5568]">
                검색 결과가 없어요
              </p>

              <p className="mt-1 text-caption text-[#9CA3AF]">
                다른 키워드로 검색해보세요
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filteredBooths.map((booth) => (
                <BoothCard
                  key={booth.id}
                  title={booth.name}
                  waiting={`대기 ${booth.waitingCount}팀`}
                  department={booth.organization}
                  boothNumber={`${booth.location}`}
                  tags={booth.isFood ? ["음식"] : ["부스"]}
                  location={booth.sector}
                  onClick={() => navigate(`/booths/${booth.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default BoothList;
