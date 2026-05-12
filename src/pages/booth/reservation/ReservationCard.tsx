import React from "react";

const CardHorizontal = (): React.ReactElement => {
  const cardData = {
    title: "치킨 세상",
    description: "경영학과 • 백양로 부스 #B-07",
  };

  return (
    <article
      className="
        w-[358px]
        h-[107px]

        flex
        items-center

        px-[24px]
        py-[24px]

        rounded-[14px]
        border
        border-[#EDEEF0]

        bg-white
        shadow-[0_1px_4px_rgba(0,0,0,0.08)]

        box-border
      "
      aria-label={`${cardData.title} 카드`}
    >
      <div
        className="
          flex
          flex-col
          justify-center
          gap-[10px]

          w-full
        "
      >
        <h2
          className="
            text-[17px]
            font-semibold
            leading-[130%]
            tracking-[-0.34px]
            text-black
          "
        >
          {cardData.title}
        </h2>

        <p
          className="
            text-[15px]
            font-normal
            leading-[140%]
            tracking-[-0.3px]
            text-[#4A5568]
          "
        >
          {cardData.description}
        </p>
      </div>
    </article>
  );
};

export default CardHorizontal;