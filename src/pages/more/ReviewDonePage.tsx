import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";

const CHARACTER_URL = "https://www.figma.com/api/mcp/asset/c1ef0ee4-d64d-42f0-a16e-4732d72b5fe2";
const INSTAGRAM_ICON_URL = "https://www.figma.com/api/mcp/asset/70426b49-05e7-416d-9ef1-f004667da555";

export default function ReviewDonePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar title="리뷰 완료" showBackButton />

      <div className="flex-1 flex flex-col items-center px-[16px] py-[36px] gap-[24px] overflow-y-auto">
        {/* 캐릭터 + 완료 타이틀 */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <div className="w-[200px] h-[147px] relative overflow-hidden">
            <img
              src={CHARACTER_URL}
              alt="캐릭터"
              className="absolute max-w-none"
              style={{ width: "113.99%", height: "155.48%", top: "-12.51%", left: "-7.12%" }}
            />
          </div>
          <span className="text-[24px] font-bold text-[#1E53FF] text-center tracking-[-0.48px] leading-[1.2]">
            리뷰 완료
          </span>
        </div>

        {/* 안내 카드 */}
        <div className="w-full bg-[#E9EEFF] border border-[#1E53FF] rounded-[14px] px-[24px] py-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)]">
          <div className="flex gap-[10px] items-start">
            <span className="text-[15px] font-semibold text-[#0D0F12] shrink-0">🎉</span>
            <span className="text-[15px] font-semibold text-[#0D0F12] leading-[1.5] tracking-[-0.3px]">
              리뷰까지 제출 성공! 젤리:U는 이제 행복해요 🥳<br />
              자세한 이야기는 멋사 인스타에서 확인해보세요!
            </span>
          </div>
        </div>
      </div>

      <div className="px-[16px] pb-[12px] shrink-0">
        <a
          href="https://www.instagram.com/likelion_yonsei/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[56px] rounded-[15px] flex items-center justify-center gap-[10px]"
          style={{ background: "linear-gradient(98.86deg, #7052FF 0%, #FF40A5 100%)" }}
        >
          <img src={INSTAGRAM_ICON_URL} alt="instagram" className="w-[24px] h-[24px]" />
          <span className="text-[17px] font-semibold text-white tracking-[-0.34px]">멋사 인스타 바로가기</span>
        </a>
      </div>

      <BottomNav />
    </div>
  );
}
