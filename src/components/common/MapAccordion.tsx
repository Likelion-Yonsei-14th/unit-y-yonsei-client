import { useState } from "react";

type MapAccordionProps = {
  title?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export default function MapAccordion({
  title = "공연 장소 안내 지도",
  children,
  defaultOpen = false,
}: MapAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex w-[358px] flex-col gap-[8px]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          h-[45px]
          w-[358px]
          items-center
          justify-between
          self-stretch
          rounded-[10px]
          border
          border-[#EDEEF0]
          bg-white
          px-[14px]
          py-[12px]
        "
      >
        <div className="flex w-[221.5px] items-center gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M4.16675 8.26904C4.16675 12.3122 7.70381 15.6558 9.26941 16.9377C9.49347 17.1211 9.60684 17.214 9.774 17.261C9.90417 17.2977 10.0957 17.2977 10.2259 17.261C10.3934 17.2139 10.506 17.122 10.7309 16.9378C12.2965 15.6559 15.8333 12.3126 15.8333 8.26941C15.8333 6.73932 15.2188 5.27171 14.1248 4.18977C13.0309 3.10783 11.5472 2.5 10.0001 2.5C8.45305 2.5 6.96925 3.10792 5.87529 4.18986C4.78133 5.2718 4.16675 6.73895 4.16675 8.26904Z"
              stroke="#1E53FF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33341 7.5C8.33341 8.42047 9.07961 9.16667 10.0001 9.16667C10.9206 9.16667 11.6667 8.42047 11.6667 7.5C11.6667 6.57953 10.9206 5.83333 10.0001 5.83333C9.07961 5.83333 8.33341 6.57953 8.33341 7.5Z"
              stroke="#1E53FF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span
            className="
              text-[14px]
              font-normal
              leading-[150%]
              tracking-[-0.28px]
              text-[#1F242C]
            "
          >
            {title}
          </span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 ${isOpen ? "" : "rotate-180"}`}
        >
          <path
            d="M12 10L8 6L4 10"
            stroke="#868D9A"
            strokeWidth="1.2"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="
            flex
            h-[216px]
            w-[358px]
            flex-col
            items-start
            justify-center
            gap-[16px]
            rounded-[14px]
            border
            border-[#EDEEF0]
            bg-white
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}