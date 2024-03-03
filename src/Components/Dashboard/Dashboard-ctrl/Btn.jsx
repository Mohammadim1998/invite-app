"use client";

const Btn = ({ img, img1, setContent, title, content, active, setActive }) => {

    return (
        <button
            onClick={() => {
                setContent(content);
                setActive(content);
            }}
        >
            <div className="flex flex-col gap-y-[6px] justify-center items-center">
                {active == content
                    ? <img src={img1} alt="" className="active:scale-50 w-6 h-6 transition-all duration-200" />
                    : <img src={img} alt="" className="w-6 h-6" />
                }
                <span className={active == content 
                ?"text-[#2B39A1] font-medium text-[11px] leading-4"
            :"text-[#818181CC] font-medium text-[10px] leading-4"}>{title}</span>
            </div>
        </button>
    );
}

export default Btn;
