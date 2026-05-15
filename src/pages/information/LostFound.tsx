import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/common/BottomNav";
import SearchBar from "../../components/common/SearchBar";
import TopBar from "../../components/common/TopBar";

type LostItem = {
  id: string;
  title: string;
  location: string;
  timestamp: string;
  isNew?: boolean;
};

const CARD_IMAGE =
  "https://www.figma.com/api/mcp/asset/fe6377f3-d1fb-4d0c-bade-0ecf313068be";

const LOST_ITEMS: LostItem[] = [
  {
    id: "1",
    title: "검정 크로스백",
    location: "백양로 푸드트럭 앞",
    timestamp: "05.21 14:32 등록",
    isNew: true,
  },
  {
    id: "2",
    title: "파란 여행 가방",
    location: "중앙도서관 앞",
    timestamp: "05.20 18:10 등록",
  },
  {
    id: "3",
    title: "흰색 이어폰 케이스",
    location: "학생회관 로비",
    timestamp: "05.19 11:05 등록",
  },
  {
    id: "4",
    title: "검정 크로스백",
    location: "100주년 기념관 앞",
    timestamp: "05.18 09:22 등록",
  },
];

function LostFoundCard({ item }: { item: LostItem }) {
  return (
    <article className="w-full rounded-[14px] border border-[#EDEEF0] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-[12px] overflow-hidden rounded-[14px]">
        <div
          className="relative h-[96px] w-[80px] shrink-0 rounded-[14px]"
          style={{
            backgroundImage:
              "linear-gradient(129.80557109226518deg, rgb(233, 238, 255) 0%, rgb(241, 238, 255) 100%)",
          }}
        >
          <img
            src={CARD_IMAGE}
            alt="분실물 썸네일"
            className="absolute inset-0 h-full w-full rounded-[14px] object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-[12px]">
          <div className="flex items-start justify-between gap-[8px]">
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-[#0D0F12] truncate">
                {item.title}
              </p>
              <p className="mt-[0.25rem] text-[14px] text-[#4A5568] truncate">
                {item.location}
              </p>
            </div>
            {item.isNew ? (
              <span className="rounded-full bg-[#E9EEFF] px-[8px] py-[2px] text-[11px] font-semibold text-[#1E53FF]">
                New
              </span>
            ) : null}
          </div>

          <div className="mt-[10px] inline-flex rounded-full bg-[#EDEEF0] px-[8px] py-[2px] text-[11px] font-semibold text-[#4A5568]">
            {item.timestamp}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LostFound() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(
    () =>
      LOST_ITEMS.filter(
        (item) =>
          item.title.includes(searchTerm) || item.location.includes(searchTerm),
      ),
    [searchTerm],
  );

  return (
    <div className="w-full min-h-screen bg-white relative">
      <TopBar title="분실물 안내" showBackButton />

      <div className="pb-[5.1875rem]">
        <div className="px-[1rem] pt-[1rem] pb-[1rem] space-y-[1rem]">
          <section className="rounded-[14px] border border-[#FFB020] bg-[#FFF8E0] p-[1.5rem] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-[0.75rem]">
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-[0.75rem] bg-[#FFF3D3]">
                <span className="text-[1rem]">📞</span>
              </div>
              <p className="text-[17px] font-semibold text-[#1F242C]">
                총학생회 분실물 센터
              </p>
            </div>

            <div className="mt-[1rem] rounded-[8px] bg-[#EDEEF0] px-[1.25rem] py-[0.875rem] text-[17px] font-semibold text-[#0D0F12]">
              010-0000-0000
            </div>

            <p className="mt-[1rem] text-[14px] leading-[1.5] text-[#4A5568]">
              물건을 잃어버리셨나요? 위 번호로 연락주시면 분실물 등록 여부를 확인해드립니다.
            </p>
          </section>

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="분실물 검색"
          />

          <div className="space-y-[0.75rem]">
            <p className="text-[12px] font-medium text-[#4A5568]">
              습득 분실물 목록
            </p>

            <div className="space-y-[0.75rem]">
              {filteredItems.map((item) => (
                <LostFoundCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
