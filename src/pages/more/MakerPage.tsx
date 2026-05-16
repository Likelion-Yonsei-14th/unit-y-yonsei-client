import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";

const LIKELION_LOGO_URL = "https://www.figma.com/api/mcp/asset/661a0b37-9665-4615-84c8-8368d25d4635";
const TEAM_PHOTO_URL = "https://www.figma.com/api/mcp/asset/c7040d27-be92-475d-9fa4-f027c05ec98f";
const CHARACTER_SMALL_URL = "https://www.figma.com/api/mcp/asset/48d9d588-7883-4b26-9fe0-0d89aa7b9c43";
const INSTAGRAM_ICON_URL = "https://www.figma.com/api/mcp/asset/723ef422-e70a-4136-96cf-710d11686431";

const MEMBERS: { role: string; names: string[] }[] = [
  { role: "PO · TECH LEAD", names: ["구서영", "우태호"] },
  { role: "기획", names: ["오은성", "구서영"] },
  { role: "디자인", names: ["이윤서", "구서영", "김성하", "김예린", "안서진"] },
  { role: "프론트엔드", names: ["임기주", "조민", "김강민", "류다은", "문지호", "유하은", "이예원", "이유준", "이정준"] },
  { role: "백엔드", names: ["우태호", "고선태", "백세빈", "이수정", "김대웅", "김민건", "민신원", "조민준", "이창운"] },
];

export default function MakerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDEEF0]">
      <div className="bg-white shrink-0">
        <TopBar title="만든이들" showBackButton />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-white flex flex-col">

          {/* 배너 (그라디언트) */}
          <div
            className="flex flex-col gap-[24px] items-center px-[20px] py-[56px] overflow-hidden"
            style={{ background: "linear-gradient(99.85deg, #1E53FF 0%, #7052FF 100%)" }}
          >
            {/* 로고 + 설명 */}
            <div className="flex flex-col gap-[12px] items-center w-full">
              <div className="flex items-center justify-center px-[58px] w-full">
                <img src={LIKELION_LOGO_URL} alt="LIKELION UNIV" className="h-[19px] object-contain" />
              </div>
              <div className="w-[310px] text-center">
                <p className="text-[15px] font-semibold text-white tracking-[-0.3px] leading-[1.5]">
                  IT창업동아리 멋쟁이사자처럼 연세대학교 14기<br />
                  대동제 사이트 TF팀
                </p>
              </div>
            </div>

            {/* 단체 사진 */}
            <div className="w-[358px] h-[216px] rounded-[12px] overflow-hidden relative">
              <img
                src={TEAM_PHOTO_URL}
                alt="팀 사진"
                className="absolute max-w-none"
                style={{ width: "104.57%", height: "147.67%", top: "-30.08%", left: "-4.55%" }}
              />
            </div>

            {/* 소개 텍스트 + 말풍선 */}
            <div className="flex flex-col gap-[32px] w-full">
              <p className="text-[17px] font-semibold text-white text-center tracking-[-0.34px] leading-[1.3]">
                "내 아이디어를 내 손으로 실현하다, Growl to World"
              </p>
              <p className="text-[12px] text-white tracking-[-0.24px] leading-[1.5]">
                멋쟁이사자처럼 대학은 2013년 시작되어 현재는 국내외 121개 대학,{"\n"}
                4천여 명이 활동하는 국내 최대 규모의 IT창업동아리로 자리매김하였습니다.{"\n\n"}
                세상을 바꿀 아이디어를 실현하고자 하는 사람들을 위한{"\n"}
                트랙별 교육 세션 및 멘토링, 아이디어톤, 중앙해커톤, 데모데이를 지원합니다.{"\n\n"}
                이를 통해 기술 역량을 기르고 다양한 프로젝트 경험을 쌓을 수 있습니다.
              </p>

              {/* 말풍선 + 캐릭터 */}
              <div className="flex items-center gap-[0px]">
                <div className="flex items-end">
                  <div className="bg-white rounded-[16px] px-[18px] py-[12px] mr-[-12px] flex flex-col gap-[12px]">
                    <div className="text-[11px] font-semibold text-[#1E53FF] tracking-[-0.22px] leading-[1.5]">
                      <p className="mb-0">내 손으로 1만 명의 전교생이 이용하는</p>
                      <p className="mb-0">대동제 사이트를 만들고 싶다면?</p>
                      <p>인스타로 놀러오세요!</p>
                    </div>
                    <a
                      href="https://www.instagram.com/likelion_yonsei/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-[4px] items-center justify-center px-[20px] py-[8px] rounded-[8px] w-full"
                      style={{ background: "linear-gradient(95.63deg, #7052FF 0%, #FF40A5 100%)" }}
                    >
                      <img src={INSTAGRAM_ICON_URL} alt="instagram" className="w-[16px] h-[16px]" />
                      <span className="text-[15px] font-semibold text-white tracking-[-0.3px]">멋사 인스타</span>
                    </a>
                  </div>
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none">
                    <path d="M0.5 1C0.5 1 5.5 9 1 20.5L16.5 13.5L0.5 1Z" fill="white" />
                  </svg>
                </div>

                <div className="w-[141px] h-[124px] relative overflow-hidden ml-auto">
                  <img
                    src={CHARACTER_SMALL_URL}
                    alt="캐릭터"
                    className="absolute max-w-none"
                    style={{ width: "455.32%", height: "517.74%", top: "-311.67%", left: "-35.53%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 만든이들 섹션 */}
          <div className="flex flex-col">
            <div className="flex items-center px-[16px] py-[20px]">
              <span className="text-[20px] font-bold text-[#0D0F12] tracking-[-0.4px]">만든이들</span>
            </div>

            <div className="flex flex-col gap-[12px] pb-[24px]">
              {MEMBERS.map(({ role, names }) => (
                <div key={role} className="flex flex-col">
                  <div className="px-[16px] py-[10px]">
                    <span className="text-[12px] text-[#0D0F12] tracking-[-0.24px] leading-[1.5]">{role}</span>
                  </div>
                  <div className="px-[16px] pb-[16px] border-b border-[#EDEEF0]">
                    <div className="flex flex-wrap gap-[10px]">
                      {names.map((name, i) => (
                        <span
                          key={name}
                          className="text-[15px] font-semibold tracking-[-0.3px] leading-[1.5]"
                          style={{ color: i === 0 ? "#1E53FF" : "#0D0F12" }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
