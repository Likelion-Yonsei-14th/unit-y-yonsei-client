const CardHorizontal = () :  React.ReactElement => {
    const cardData = {
        title: "치킨 세상",
        description: "경영학과 • 백양로 부스 #B-07",
    };

    return (
        <article 
        className="relative flex items-center gap-3 overflow-hidden rounded-[14px] border border-sloid border-default bg-primary p-6"
        aria-label={`${cardData.title} 카드`}> 
        
        <div className="relative flex w-[310px] flex-col items-start gap-2.5 self-stretch">
            <header className="relative flex w-full flex[0_0auto] items-center gap-3 self-stretch">
                <h2 className="relative mt-[-1.00px] w-fit font-heading-2 text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] whitespace-nowrap text-[#000000] [ont-style:var(-heading-2-font-style)]font-heading-3 text-[length:var(--heading-3-font-size)] font-[number:var(--heading-3-font-weight)] leading-[var(--heading-3-line-height)] tracking-[var(--heading-3-letter-spacing)] text-[#000000] [font-style:var(--heading-3-font-style)]">
                    {cardData.title}
                </h2>
            </header>
            <p className="relative self-stretch font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-[#4a5568] [font-style:var(--body-1-font-style)]">
                {cardData.description}
            </p>
        </div>
        </article>
    );
}; 