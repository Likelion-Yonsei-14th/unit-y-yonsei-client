type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "부스명, 단체명, 메뉴명 검색",
}: SearchBarProps) {
  return (
    <div className="flex h-[45px] w-[358px] items-center gap-[10px] rounded-[8px] bg-[#EDEEF0] px-[20px] py-[12px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M10.1112 10.1107L14.7778 14.7773M6.22228 11.6662C3.21539 11.6662 0.777832 9.22867 0.777832 6.22179C0.777832 3.2149 3.21539 0.777344 6.22228 0.777344C9.22916 0.777344 11.6667 3.2149 11.6667 6.22179C11.6667 9.22867 9.22916 11.6662 6.22228 11.6662Z"
          stroke="#ACB1BA"
          strokeWidth="1.55556"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        className="flex-1 bg-transparent text-[14px] font-normal leading-[150%] tracking-[-0.28px] outline-none placeholder:text-[#ACB1BA]"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}