type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <label className="flex items-center gap-[0.75rem] rounded-[0.75rem] border border-[#EDEEF0] bg-[#F8F9FB] px-[1rem] py-[0.875rem]">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          stroke="#868D9A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m16.5 16.5 4 4"
          stroke="#868D9A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-body-1 text-[#1F242C] placeholder:text-[#ACB1BA] outline-none"
      />
    </label>
  );
}

export default SearchBar;
