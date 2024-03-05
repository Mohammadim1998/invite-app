"use client";

const tab = ({ img, img1, title, content, setContent, active, setActive }) => {
    return (
        <div
            onClick={() => {
                setContent(content);
                setActive(content);
            }}
            className={active === content ? "relative flex flex-col items-center gap-y-[6px] bg-[#FFFFFF1A] p-[8px_0px_4px_0px] rounded-[8px_8px_0px_0px]" : "flex flex-col items-center p-[8px_0px_4px_0px] gap-y-[6px]"}
        >
            <img src={active === content ? img1 : img} alt="" className="w-5 h-5" />
            <span className={active === content
                ? "text-[#FFFFFF] font-medium text-xs leading-4 px-[10.5px] mb-2"
                : "text-[#FFFFFF] font-normal text-xs leading-4 px-[10.5px] mb-2"
            }>
                {title}
            </span>

            {active === content ? (<div className="absolute bottom-0 w-full h-[2.5px] bg-[#FFFFFF]"></div>) : null}
        </div>
    );
}

export default tab;