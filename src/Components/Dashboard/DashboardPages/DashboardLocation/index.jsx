"use client";
import { useEffect, useState } from "react";
import Box from "../DashboardLocation/box";
import Link from "next/link";

const DashboardLocation = () => {
    const [locId, setLocId] = useState();
    let [active, setActive] = useState(false);

    useEffect(() => {
        locId ? setActive(true) : setActive(false);
    },)

    return (
        <main className="h-full overflow-y-hidden ">
            <div className="relative w-full h-screen bgDashboard-mobile2">

                <Box setLocId={setLocId} id={1} top={24} left={17} />
                <Box setLocId={setLocId} id={2} top={18} left={53} />

                <div className="absolute left-0 flex items-center justify-between w-full px-6 top-4">
                    <div className="flex justify-center items-center gap-x-[10px]">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer">
                            <img src="/images/svg/actions/search.svg" alt="" className="w-[14px] h-[14px] text-red-700" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer">
                            <img src="/images/svg/actions/setting.svg" alt="" className="w-[14px] h-[14px]" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer">
                        <img src="/images/svg/actions/arrowLeftBlack.svg" className="w-[14px] h-[14px] text-[#292D32]" />

                    </div>
                </div>

                <div className={active
                    ? "absolute bottom-[57px] left-0 w-full bg-white rounded-t-[28px] pt-6 pb-6 px-6 transition-all duration-1000"
                    : "absolute bottom-[-200px] left-0 w-full bg-white rounded-t-[28px] pt-6 pb-6 px-6 transition-all duration-1000"
                }>
                    <div
                        onClick={() => {
                            setLocId()
                        }
                        }
                        className="absolute top-2 left-[50%] translate-x-[-50%] w-[64px] h-[5px] bg-[#D9D9D9] rounded-md"></div>

                    <div className="font-bold flex flex-col ">
                        <h1 className="text-[13px] leading-5 text-right text-[#3A3A3A] mb-[6px]">{locId?.title}</h1>
                        <h3 className="text-[11px] leading-4 text-right text-[#818181]">{locId?.subTitle}</h3>
                    </div>
                    <div className="flex justify-start items-center gap-x-[5px] mt-4">
                        <div className="w-4 h-4 flex justify-center items-center mr-[1px]">
                            <img src="/images/svg/leftArrowSharpBlue.svg" className="w-[11px] h-[10px]" />
                        </div>
                        <Link href={"#"} className="text-[#1D266C] font-bold text-xs leading-5 text-right">اطلاعات بیشتر</Link>
                    </div>
                    <div className="w-full border-[1px] bg-[#0000001A] mt-2 mb-[10px]"></div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                            <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">امتیاز نقطه</span>
                            <div className="flex items-center justify-center gap-x-1">
                                <span className="text-[#000000] font-bold leading-5 ">{locId?.star}</span>
                                <span className="flex justify-center items-center w-[14px] h-[14px]"><img src="/images/svg/star.svg" className="w-3 h-3" /></span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                            <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">سابقه جلسات</span>
                            <div className="flex justify-center items-center gap-x-1 text-[#000000] font-bold leading-5">
                                <span className="">{locId?.historyOfCase}</span>
                                <span className="">مورد</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                            <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">اسکان</span>
                            <div className="flex items-center justify-center gap-x-1">
                                <span className="text-[#000000] font-bold leading-5">{locId?.kindOfOccupy}</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                            <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">حق القدم</span>
                            <div className="flex items-center justify-center gap-x-1">
                                <span className="text-[#000000] font-bold leading-5">{locId?.kindOfPreference}</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-4 grid max-md:grid-cols-3 gap-x-[17px] justify-center items-center child:rounded-[8px] child:flex child:justify-around child:items-center">
                        <div className="w-[93px] h-[80]"><img src={locId?.img1} alt="img1" className="rounded-[8px] w-full h-full" /></div>
                        <div className="w-[93px] h-[80]"><img src={locId?.img2} alt="img2" className="rounded-[8px] w-full h-full" /></div>
                        <div className="w-[93px] h-[80]"><img src={locId?.img3} alt="img3" className="rounded-[8px] w-full h-full" /></div>
                    </div>

                    <div className="w-full border-[1px] bg-[#0000001A] mt-[10px] mb-[14px]"></div>

                    <div className="flex justify-start items-center gap-x-[10px] ">
                        <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                            <div className="w-[10px] h-[10px]">
                                <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                            </div>
                            <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت فعالیت تبلیغی</span>
                        </button>
                        <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                            <div className="w-[10px] h-[10px]">
                                <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                            </div>
                            <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت سوابق تبلیغی</span>
                        </button>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default DashboardLocation;
{/*
                <div className="absolute top-[24%] left-[17%] w-10 h-10">
                    <img src="/images/svg/actions/locationRed.svg" alt="" className="w-[33px] h-[28px]" />
                </div>

                <div className="absolute top-[18%] left-[53%] w-10 h-10">
                    <img src="/images/svg/actions/locationRed.svg" alt="" className="w-[33px] h-[28px]" />
                </div>
                */}