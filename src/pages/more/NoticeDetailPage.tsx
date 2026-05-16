import TopBar from '../../components/common/TopBar';
import BottomNav from '../../components/common/BottomNav';

// TODO: API 연동 후 useParams로 id 받아서 실제 데이터 fetch
const mockNotice = {
  title: '동문 광장 공연 참가 신청 안내',
  createdAt: '2026.05.01',
  imageUrl: '',
  content: `[개교 제141주년 무악대동제: 너와 내가 하나되는 연세의 축제, <UNIT:Y> 개최 공지]

안녕하세요, 개교 제141주년 무악대동제 <UNIT:Y> 기획단입니다.

봄날의 설렘이 청춘의 빛나는 웃음소리로 물들 5월 말, 우리 모두가 기다려온 무악대동제가 펼쳐집니다.

26일, 총학생회 체육부와 함께하는 블루런으로 푸른 설렘의 서막을 열고
27일엔 국제캠퍼스에서 더위를 단숨에 날려버릴 워터슬라이드 등 액티비티와 풍성한 공연과 먹거리,
28일과 29일에는 신촌 백양로를 빼곡하게 수놓은 부스와 반짝이는 공연들이 어우러져 신촌의 낮과 밤을 온통 축제의 열기로 물들일 예정입니다.

흩어져 있던 청춘의 조각들이 한 곳에 모여
각자의 색으로 하나의 장면을 완성해 내고,

그 겹겹의 색들이 어우러져
연세라는 하나의 이름이 됩니다.

이제 우리가 하나되는 순간으로 여러분을 초대합니다.

UNIT:Y,
너와 내가 하나되는 연세의 축제

개교 제141주년 무악대동제 <UNIT:Y> 기획단`,
  instagramUrl: 'https://www.instagram.com',
};

export default function NoticeDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="공지사항" showBackButton />

      <main className="flex-1 overflow-y-auto pb-[83px]">

        {/* 제목 + 날짜 */}
        <section className="px-[24px] py-[8px] bg-white flex flex-col gap-[4px]">
          <h1 className="text-heading-2">{mockNotice.title}</h1>
          <span className="text-caption text-[#ACB1BA]">{mockNotice.createdAt}</span>
        </section>

        {/* 배너 이미지 */}
        <section className="h-[488px] pt-[24px] px-[20px] pb-[20px] bg-white">
          <div className="w-full h-full bg-[#EDEEF0] overflow-hidden">
            {mockNotice.imageUrl && (
              <img src={mockNotice.imageUrl} alt="공지 이미지" className="w-full h-full object-cover" />
            )}
          </div>
        </section>

        {/* 본문 내용 */}
        <section className="px-[24px] pt-[24px] pb-[20px] bg-white">
          <p className="text-body-2 whitespace-pre-line">{mockNotice.content}</p>
        </section>

        {/* 인스타그램 바로가기 버튼 */}
        <div className="px-[16px] pt-[24px] pb-[20px] bg-white">
          <button
            type="button"
            onClick={() => window.open(mockNotice.instagramUrl, '_blank')}
            className="w-full h-[56px] rounded-[15px] flex items-center justify-center gap-[10px] text-white"
            style={{ background: 'linear-gradient(to right, #7052FF, #FF40A5)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            공지 인스타그램 바로가기
          </button>
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
