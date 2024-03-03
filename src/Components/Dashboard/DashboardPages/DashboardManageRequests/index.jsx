"use client";
import { useEffect, useState } from "react";
import Tabbar from "./TabbarCtrl";
import Messages from "./Tabs/Messages";
import ChatOnline from "./Tabs/ChatOnline";
import Tickets from "./Tabs/Tickets";


const DashboardManageRequests = () => {
    const [detail, setDetail] = useState(<Messages />);
    const [content, setContent] = useState("messages");

    useEffect(() => {
        if (content === "messages") {
            setDetail(<Messages />)
        } else if (content === "chatOnline") {
            setDetail(<ChatOnline />)
        } else if (content === "tickets") {
            setDetail(<Tickets />)
        }
    }, [content])

    return (
        <main className="w-screen">
            <div className="w-full bg-[#2B39A1] p-[16px_16px_6px_16px] rounded-[0_0_14px_14px]">
                <div className="w-full flex justify-between items-center mb-11">
                    <span className="text-[#FFFFFF] text-sm font-semibold leading-5">مدیریت درخواست ها</span>

                    <div className="w-4 h-4 cursor-pointer"><img src="/images/svg/tabbar/search.svg" className="w-full h-full" /></div>
                </div>

                <Tabbar setContent={setContent} />
            </div>

            <div className="w-full sliderContainer px-4 h-[30px] mt-5 mb-4 flex justify-start items-center gap-x-[10px]  overflow-scroll child:whitespace-nowrap">
                <span className=" text-[#5462CA] border-[1px] border-[#2B39A1] flex justify-center items-center gap-x-1 font-medium text-xs leading-5 bg-[#EFEFEF] rounded-3xl p-[4px_8px_4px_8px]">
                    دعوت و ظرفیت
                    <div className="w-[19px] h-[19px] bg-[#5E6CD4] rounded-full flex justify-center items-center text-white">۲</div>
                </span>
                <span className="text-[#3A3A3ACC] leading-5 text-xs flex justify-center items-center bg-[#EFEFEF] rounded-3xl p-[4px_8px_4px_8px]">
                    گواهی‌ها
                </span>
                <span className="text-[#3A3A3ACC] leading-5 text-xs flex justify-center items-center bg-[#EFEFEF] rounded-3xl p-[4px_8px_4px_8px]">
                    فعالیت های تبلیغی
                </span>
                <span className="text-[#3A3A3ACC] leading-5 text-xs flex justify-center items-center bg-[#EFEFEF] rounded-3xl p-[4px_8px_4px_8px]">
                    رزومه تبلیغی
                </span>
                <span className="text-[#3A3A3ACC] leading-5 text-xs flex justify-center items-center bg-[#EFEFEF] rounded-3xl p-[4px_8px_4px_8px]">
                    شبکه های تبلیغی
                </span>
            </div>
            <section className="w-full">{detail}</section>
        </main>
    );
}

export default DashboardManageRequests;