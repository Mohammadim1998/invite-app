"use client"
import Link from "next/link";
import BannerContentDashboard from "../../../BannerContentDashboard";
import CircleBoxDashboard from "../../../CircleBoxDashboard";
import SectionHeader from "../../../SectionHeader";
import SquareBookDashboard from "../../../SquareBookDashboard";
import SquareBoxDashboard from "../../../SquareBoxDashboard";
import SquarePersonDashboard from "../../../SquarePersonDashboard";
import { useRouter } from "next/navigation";

const DashboardHome = () => {

    const openMunu = () => {
        const hamburgerMenuActive = document.querySelector(".hamburgerMenuActive");
        const overlay = document.querySelector(".overlay");
        document.body.style.overflow = "hidden";

        overlay.classList.add("active");
        hamburgerMenuActive.classList.add("active")

    }
    const closeMunu = () => {
        const hamburgerMenuActive = document.querySelector(".hamburgerMenuActive");
        const overlay = document.querySelector(".overlay");
        document.body.style.overflow = "auto";

        overlay.classList.remove("active");
        hamburgerMenuActive.classList.remove("active")
    }

    const closeOverlay = () => {
        const hamburgerMenuActive = document.querySelector(".hamburgerMenuActive");
        const overlay = document.querySelector(".overlay");
        document.body.style.overflow = "auto";

        overlay.classList.remove("active");
        hamburgerMenuActive.classList.remove("active")
    }

const router = useRouter();

const gotToNotificationPage = () => {
    router.push("/notification")
}

    return (
        <main className="relative w-screen">
            <div className="bgDashboard-mobile w-full h-[50%] mb-4">
                <div className="container flex flex-col gap-y-6 px-4 pt-[18px] pb-[51px]">
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center gap-x-[6px]">
                            <div
                                onClick={() => openMunu()}
                                className="flex justify-center items-center gap-x-[10px]">
                                <img src="/images/svg/hamburger.svg" className="w-5 h-6 cursor-pointer" />
                            </div>
                            <img src="/images/svg/shamLogo.svg" className="w-[22px] h-8" />
                            <span className=" text-[#FFFFFF] font-medium text-sm leading-5 text-right">پیشخوان</span>
                        </div>

                        <div onClick={() => gotToNotificationPage()} className="w-8 h-8 bg-[#FFFFFF1F] flex justify-center items-center rounded-[6px]">
                            <img src="/images/svg/bell.svg" className="w-5 h-6" />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center px-[9px]">
                        <CircleBoxDashboard img={"/images/svg/daicon-1.svg"} title={"تعداد گزارش‌ها"} subTitle={"۳۲۵ مورد"} />
                        <CircleBoxDashboard img={"/images/svg/daicon-2.svg"} title={"تعداد سوابق"} subTitle={"۳۲۵ مورد"} />
                        <CircleBoxDashboard img={"/images/svg/daicon-3.svg"} title={"تعداد دعوت‌ها"} subTitle={"۳۲۵ مورد"} />
                        <CircleBoxDashboard img={"/images/svg/daicon-4.svg"} title={"امتیاز تبلیغی"} subTitle={"۳۲۵ مورد"} />
                    </div>
                </div>
            </div>
            <div className="w-full pb-10">
                <SectionHeader title={"خدمات شمع"} btnTitle={"مشاهده همه"} />
                <div className="w-full flex justify-between items-center mt-[14px] px-4">
                    <SquareBoxDashboard img={"/images/svg/squareIcon-1.svg"} title={"گواهی تبلیغی"} />
                    <SquareBoxDashboard img={"/images/svg/personIcon.svg"} title={"گروه  تبلیغی"} />
                    <SquareBoxDashboard img={"/images/svg/bookIcon.svg"} title={"محتوای تبلیغی"} />
                    <SquareBoxDashboard img={"/images/svg/pageIcon.svg"} title={"اطلاعیه‌ها"} />
                </div>

                <div className="w-full mt-[26px] px-4 mb-[26px]">
                    <BannerContentDashboard
                        title={"فرصت‌های تبلیغی در انتظار شماست"}
                        subTitle={"همین حالا مناسب‌ترین موقعیت را انتخاب کنید"}
                    />
                </div>
                <SectionHeader title={"محتوای بیشتر"} btnTitle={"بیشتر"} />

                <div className="w-full flex justify-between items-center mt-[14px] mb-[30px] px-4">
                    <SquareBookDashboard img={"/images/squareBookIcon.jpg"} title={"رفیقم حسین"} />
                    <SquareBookDashboard img={"/images/squareBookIcon.jpg"} title={"رفیقم حسین"} />
                    <SquareBookDashboard img={"/images/squareBookIcon.jpg"} title={"رفیقم حسین"} />
                    <SquareBookDashboard img={"/images/squareBookIcon.jpg"} title={"رفیقم حسین"} />
                </div>

                <SectionHeader title={"مبلغین برتر"} btnTitle={"بیشتر"} />

                <div className="w-full flex justify-between items-center mt-[14px] mb-[57px] px-4">
                    <SquarePersonDashboard img={"/images/person1.jpg"} title={"حجت‌السلام رسول خضری"} />
                    <SquarePersonDashboard img={"/images/person2.jpg"} title={"حجت‌السلام علی‌اکبر شهر..."} />
                    <SquarePersonDashboard img={"/images/person1.jpg"} title={"حجت‌السلام رسول خضری"} />
                    <SquarePersonDashboard img={"/images/person2.jpg"} title={"حجت‌السلام علی‌اکبر شهر..."} />
                </div>

            </div>
            {/* HAMBURGER MENU */}
            <div className="z-50 hamburgerMenuActive fixed top-0 bottom-0 right-[-66%] w-[66%] bg-white px-4 py-4 shadow-[-4px_0px_8px_0px_#00000040]">
                <div className="w-full">
                    <div onClick={() => closeMunu()} className="mr-auto w-6 h-6 flex justify-center items-center cursor-pointer border-[#00000033]  border-[1px] rounded-[4px] bg-inherit">
                        <img src="/images/svg/hamburger/close.svg" alt="" className="w-4 h-4" />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-3 mb-5 mt-[5px]">
                    <span className="shrink-0 text-[#2B39A1] font-medium text-sm leading-5">خدمات پرکاربرد</span>
                    <div className="h-[1px] w-full bg-[#0000001A]"></div>
                </div>

                <div className="mb-8">
                    <ul className="flex flex-col items-start gap-y-4">
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/certification.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">گواهی تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/capacity.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">ظرفیت های تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/atlas.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">اطلس تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/content.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">محتوای تبلیغی</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-center items-center gap-x-3 mb-5">
                    <span className="shrink-0 text-[#2B39A1] font-medium text-sm leading-5">سایر خدمات</span>
                    <div className="h-[1px] w-full bg-[#0000001A]"></div>
                </div>

                <div className="mb-8">
                    <ul className="flex flex-col items-start gap-y-4">
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/news.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">اخبار تبلیغ</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/questions.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">سوالات متداول</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/aboutus.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">درباره ما</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* END HAMBURGER MENU */}
            <div
                onClick={() => closeOverlay()}
                className="z-40 overlay fixed top-0 bottom-0 right-[-100%] w-full bg-black/70 "></div>

        </main>
    );
}

export default DashboardHome;