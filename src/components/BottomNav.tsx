type BottomNavProps = {
  active: "home" | "booth" | "reservation" | "performance" | "more";
};

function BottomNav({ active }: BottomNavProps) {
  const navItems = [
    {
      key: "home",
      label: "홈",
      activeIcon: "/bottomNav/home-active.svg",
      inactiveIcon: "/bottomNav/home-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "booth",
      label: "부스",
      activeIcon: "/bottomNav/booth-active.svg",
      inactiveIcon: "/bottomNav/booth-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "reservation",
      label: "예약",
      activeIcon: "/bottomNav/reservation-active.svg",
      inactiveIcon: "/bottomNav/reservation-inactive.svg",
      size: "w-[2rem] h-[1.5rem]",
    },
    {
      key: "performance",
      label: "공연",
      activeIcon: "/bottomNav/performance-active.svg",
      inactiveIcon: "/bottomNav/performance-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "more",
      label: "더보기",
      activeIcon: "/bottomNav/more-active.svg",
      inactiveIcon: "/bottomNav/more-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
  ] as const;

  return (
    <nav className="h-[3.8125rem] border-t border-[#EDEEF0] bg-white flex items-center justify-around">
      {navItems.map((item) => {
        const isActive = active === item.key;

        return (
          <button
            key={item.key}
            type="button"
            className="flex flex-col items-center gap-[0.25rem]"
          >
            <img
              src={isActive ? item.activeIcon : item.inactiveIcon}
              alt=""
              className={item.size}
            />
            <span
              className={`text-[0.6875rem] font-semibold ${
                isActive ? "text-[#1E53FF]" : "text-[#868D9A]"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;