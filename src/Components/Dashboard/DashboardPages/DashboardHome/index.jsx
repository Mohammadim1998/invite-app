import BannerContentDashboard from "../../../BannerContentDashboard";
import CircleBoxDashboard from "../../../CircleBoxDashboard";
import SectionHeader from "../../../SectionHeader";
import SquareBookDashboard from "../../../SquareBookDashboard";
import SquareBoxDashboard from "../../../SquareBoxDashboard";
import SquarePersonDashboard from "../../../SquarePersonDashboard";

const DashboardHome = () => {

    return (
        <main className="w-screen">
            <div className="bgDashboard-mobile w-full h-[50%] mb-4">
                <div className="container flex flex-col gap-y-6 px-4 pt-[18px] pb-[51px]">
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center gap-x-[6px]">
                            <div className="flex justify-center items-center gap-x-[10px]">
                                <img src="/images/svg/hamburger.svg" className="w-5 h-6 cursor-pointer" />
                            </div>
                            <img src="/images/svg/shamLogo.svg" className="w-[22px] h-8" />
                            <span className=" text-[#FFFFFF] font-medium text-sm leading-5 text-right">پیشخوان</span>
                        </div>

                        <div className="w-8 h-8 bg-[#FFFFFF1F] flex justify-center items-center rounded-[6px]">
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
        </main>
    );
}

export default DashboardHome;