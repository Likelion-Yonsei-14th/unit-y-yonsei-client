import { useState } from "react";

function FloatingChatMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="fixed bottom-[94px] right-3 flex flex-col items-end gap-2.5">
      <div
      className={`
        flex flex-col items-end gap-2.5
        transition-all duration-300 ease-out
        ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      {isOpen && (
        <>
          <button
            onClick={() => openChat("https://open.kakao.com/...")}
            className="
              flex items-center gap-2
              rounded-[12px]
              bg-white
              w-[148px] h-[52px]
              px-3 py-2
              shadow-[0_2px_6px_rgba(0,0,0,0.07)]
            "
          >
            <div className="flex h-[32px] w-[32px] items-center justify-center">
              <img src="/floatingchat/chat.svg" alt="" />
            </div>

            <span className="text-body-1">
              라이브 채팅
            </span>
          </button>

          <button
            onClick={() => openChat("https://open.kakao.com/...")}
            className="
              flex items-center gap-2
              rounded-[12px]
              bg-white
              w-[148px]
              h-[48px]
              px-3 py-2
              shadow-[0_2px_6px_rgba(0,0,0,0.07)]
            "
          >
            <div className="flex h-[32px] w-[32px] items-center justify-center">
              <img src="/floatingchat/help.svg" alt="" />
            </div>

            <span className="text-body-1">
              운영 지원 센터
            </span>
          </button>
        </>
      )}
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex h-[52px] w-[52px] items-center justify-center
          rounded-full
          bg-[#1E53FF]
          shadow-lg
        "
      >
        <img
          src={
            isOpen
              ? "/floatingchat/chat-white.svg"
              : "/floatingchat/chat-white.svg"
          }
          alt=""
        />
      </button>
    </div>
  );
}

export default FloatingChatMenu;