
const messageBox = ({ img, title, answer, situation, btn1, btn2, time, date, count }) => {

    return (
        <div className="w-full shadow-[0px_0.5px_1.5px_0.75px_#00000026] p-[16px_12px_10px] rounded-lg mb-4">
            <div className="flex justify-between">
                <div className="flex justify-start items-center gap-x-3">
                    <div className="w-10 h-10 bg-[#ECECEC] rounded-full flex justify-center items-center">
                        <img src={img} alt="" className="w-[34px] h-[34px]" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-[6px]">
                        <span className="text-[#3A3A3A] font-medium text-xs leading-5">{title}</span>
                        <div className="flex justify-start items-center gap-x-[6px] font-normal leading-4 text-[11px]">
                            <span className="text-[#616161D9] font-normal leading-4">وضعیت:</span>
                            {situation === 1
                                ? (<span className="text-[#339955]">پاسخ داده شده</span>)
                                : situation === 2 ? (<span className="text-[#CC8700]">در انتظار بررسی</span>)
                                    : (<span className="text-[#616161]">بسته شده</span>)
                            }
                        </div>
                    </div>
                </div>
                {answer
                    ? (
                        <div className="w-6 h-6 bg-[#2C8C03] rounded-full shrink-0 flex justify-center items-center font-bold text-[13px] leading-3 text-white font-Anjoman">{count.toLocaleString("fa-IR")}</div>
                    ) : null}
            </div>

            <div className="w-full h-[1px] bg-[#0000000D] my-3"></div>

            <div className="flex justify-between child:rounded">
                <span className="bg-[#2B39A114] text-[#2B39A1] font-medium text-[10px] leading-4 p-[4px_14px_4px_14px]">{btn1}</span>
                <span className="bg-[#2B39A114] text-[#2B39A1] font-medium text-[10px] leading-4 p-[4px_14px_4px_14px]">{btn2}</span>
                <div className="bg-[#2B39A114] flex gap-x-[6px] justify-center items-center text-[#2B39A1] font-medium text-[10px] leading-4 p-[4px_14px_4px_14px]">
                    <span className=""> {time.toLocaleString("fa-IR")}</span>
                    <div className="">-</div>
                    <span className="">{date}</span>
                </div>
            </div>
        </div>
    );
}

export default messageBox;