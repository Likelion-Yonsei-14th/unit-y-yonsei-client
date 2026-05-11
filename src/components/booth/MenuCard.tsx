import type { JSX } from "react";
import image32 from "./image-32.png";

type CardHorizontalProps = {
  title?: string;
  description?: string;
  price?: string;
  imageAlt?: string;
  isSoldOut?: boolean;
};

export const CardHorizontal = ({
  title = "슈크림 붕어빵 (3개)",
  description = "신선한 재료로 만드는 따뜻한 붕어빵",
  price = "2,500원",
  imageAlt = "슈크림 붕어빵 상품 이미지",
  isSoldOut = false, 
}: CardHorizontalProps): JSX.Element => {
  return (
<article
  className={`flex h-24 items-center gap-3 overflow-hidden rounded-[14px] border border-solid border-default pl-0 pr-3 py-0 shadow-[] relative ${
    isSoldOut ? "bg-secondary" : "bg-primary"
  }`}
>      <div className="relative h-24 w-20 shrink-0 bg-[linear-gradient(135deg,rgba(233,238,255,1)_0%,rgba(241,238,255,1)_100%)]">
        <img
          className="absolute left-[calc(50.00%_-_40px)] top-[calc(50.00%_-_43px)] h-[87px] w-20 aspect-[0.92] object-contain"
          alt={imageAlt}
          src={image32}
        />
      </div>
      <div className="relative flex flex-1 grow items-start gap-5">
        <div className="relative flex flex-1 grow flex-col items-start justify-center gap-1">
          <div className="relative flex w-full flex-col items-start gap-0.5 self-stretch">
            <div className="relative flex w-full items-center gap-3 self-stretch">
              <h3 className="relative mt-[-1.00px] w-fit whitespace-nowrap font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] tracking-[var(--heading-3-letter-spacing)] text-[#000000] [font-style:var(--heading-3-font-style)]">
                {title}
              </h3>
            </div>
            <p className="relative self-stretch font-caption text-[length:var(--caption-font-size)] font-[number:var(--caption-font-weight)] leading-[var(--caption-line-height)] tracking-[var(--caption-letter-spacing)] text-[#4a5568] [font-style:var(--caption-font-style)]">
              {description}
            </p>
          </div>
        </div>
        <div className="relative inline-flex flex-[0_0_auto] items-center justify-end gap-3 self-center">
  {isSoldOut ? (
    <span className="relative mt-[-1.00px] w-fit whitespace-nowrap font-heading-3 text-[#4a5568]">
      마감
    </span>
  ) : (
    <p className="relative mt-[-1.00px] w-fit whitespace-nowrap font-heading-3 text-x-primary">
      {price}
    </p>
  )}
</div>
        </div>
    </article>
  );
};

export default CardHorizontal;





