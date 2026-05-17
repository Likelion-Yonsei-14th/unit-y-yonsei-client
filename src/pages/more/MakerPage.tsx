import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";

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
                <img src="/img/likelion-logo.png" alt="LIKELION UNIV" className="h-[19px] object-contain" />
              </div>
              <div className="w-[310px] text-center">
                <div className="text-body-1 text-white">
                  <p className="mb-0 leading-[1.5]">IT창업동아리 멋쟁이사자처럼 연세대학교 14기</p>
                  <p className="leading-[1.5]">대동제 사이트 TF팀</p>
                </div>
              </div>
            </div>

            {/* 단체 사진 */}
            <div className="w-[358px] h-[216px] rounded-[12px] overflow-hidden relative">
              <img
                src="/img/team-photo.png"
                alt="팀 사진"
                className="absolute max-w-none"
                style={{ width: "104.57%", height: "147.67%", top: "-30.08%", left: "-4.55%" }}
              />
            </div>

            {/* 소개 텍스트 + 말풍선 */}
            <div className="flex flex-col gap-[32px] w-full">
              <p className="text-heading-3 text-white text-center">
                "내 아이디어를 내 손으로 실현하다, Growl to World"
              </p>
              <div className="text-caption text-white">
                <p className="mb-0 leading-[1.5]">멋쟁이사자처럼 대학은 2013년 시작되어 현재는 국내외 121개 대학,</p>
                <p className="mb-[18px] leading-[1.5]">4천여 명이 활동하는 국내 최대 규모의 IT창업동아리로 자리매김하였습니다.</p>
                <p className="mb-0 leading-[1.5]">세상을 바꿀 아이디어를 실현하고자 하는 사람들을 위한</p>
                <p className="mb-[18px] leading-[1.5]">트랙별 교육 세션 및 멘토링, 아이디어톤, 중앙해커톤, 데모데이를 지원합니다.</p>
                <p className="leading-[1.5]">이를 통해 기술 역량을 기르고 다양한 프로젝트 경험을 쌓을 수 있습니다.</p>
              </div>

              {/* 말풍선 + 캐릭터 */}
              <div className="flex items-center gap-[0px]">
                <div className="flex items-end">
                  <div className="bg-white rounded-[16px] px-[18px] py-[12px] mr-[-12px] flex flex-col gap-[12px]">
                    <div className="text-label text-[#1E53FF]">
                      <p className="mb-0 leading-[1.5]">내 손으로 1만 명의 전교생이 이용하는</p>
                      <p className="mb-0 leading-[1.5]">대동제 사이트를 만들고 싶다면?</p>
                      <p className="leading-[1.5]">인스타로 놀러오세요!</p>
                    </div>
                    <a
                      href="https://www.instagram.com/likelion_yonsei/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-[4px] items-center justify-center px-[20px] py-[8px] rounded-[8px] w-full"
                      style={{ background: "linear-gradient(95.63deg, #7052FF 0%, #FF40A5 100%)" }}
                    >
                      <img src="/img/maker-instagram-icon.svg" alt="instagram" className="w-[16px] h-[16px]" />
                      <span className="text-body-1 text-white">멋사 인스타</span>
                    </a>
                  </div>
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none">
                    <path d="M0.5 1C0.5 1 5.5 9 1 20.5L16.5 13.5L0.5 1Z" fill="white" />
                  </svg>
                </div>

                <div className="w-[141px] h-[124px] relative overflow-hidden ml-auto">
                  <img
                    src="/img/maker-character.png"
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
              <span className="text-heading-2 text-[#0D0F12]">만든이들</span>
            </div>

            <div className="flex flex-col gap-[12px] pb-[24px]">
              {MEMBERS.map(({ role, names }) => (
                <div key={role} className="flex flex-col">
                  <div className="px-[16px] py-[10px]">
                    <span className="text-caption text-[#0D0F12]">{role}</span>
                  </div>
                  <div className="px-[16px] pb-[16px] border-b border-[#EDEEF0]">
                    <div className="flex flex-wrap gap-[10px]">
                      {names.map((name, i) => (
                        <span
                          key={name}
                          className="text-body-1"
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
