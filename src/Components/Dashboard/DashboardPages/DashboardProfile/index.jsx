
const DashboardProfile = () => {
    return (
        <main className={`w-full  bg-[#2C39A1] h-screen `}>
            <div className="relative w-full">
            </div>
            <div className="absolute w-full top-[5%]">
                <div className="absolute left-6 right-6 flex flex-col bg-white rounded-2xl p-[24px_24px_16px_24px] shadow-[0px_2px_4px_0px_#00000040]">
                    <div className="flex justify-start items-center gap-x-[17px] mb-[23px]">
                        <div className="w-[56px] h-[56px] bg-[#CECECE] rounded-full flex justify-center items-center">
                            <div className="w-[54px] h-[54px] rounded-full">
                                <img src="/images/image1.jpg" alt="" className="w-full h-full rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col  gap-y-2">
                            <span className="text-[#3A3A3A] font-bold text-[13px] leading-5">احمد علی ‌آبادی اصل</span>
                            <span className="text-[#3A3A3A99] text-xs leading-5 font-medium">طلبه سطح  ۲</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center  font-normal text-[13px] leading-5 border-b-[1px] border-[#0000001A] pb-2">
                        <span className="text-[#3A3A3A]">رزومه تبلیغی</span>
                        <span className="text-[#0BC778]">تایید شده</span>
                    </div>
                    <div className="w-full flex justify-between items-center  font-normal text-[13px] leading-5 border-b-[1px] border-[#0000001A] pb-2  pt-2">
                        <span className="text-[#3A3A3A]">رزومه دعوت</span>
                        <span className="text-[#FF0000]">رد شده</span>
                    </div>
                    <div className="w-full flex justify-between items-center  font-normal text-[13px] leading-5 pt-2">
                        <span className="text-[#3A3A3A]">رزومه شبکه</span>
                        <span className="text-[#CF8700]">در حال بررسی</span>
                    </div>
                </div>
                <div className="rounded-[40px] bg-white w-full p-[103px_24px_75px_24px] mt-[40%]">
                    <div className="container w-full h-full">
                        <span className="text-[#3A3A3AA6] font-semibold text-sm leading-5">تنظیمات شمع من</span>

                        <div className="flex flex-col w-full mt-4 mb-8 gap-y-4">
                            <div className="w-full bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-1.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">پروفایل کاربری</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">مشخصات و اطلاعات فردی</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-2.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">رزومه تبلیغی</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">اطلاعات فعالیت تبلیغ های شما</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-3.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">رزومه دعوت</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">اطلاعات دعوت های انجام شده از شما</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-4.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">رزومه تخصصی (شبکه)</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">شبکه ها و گروه های تخصصی تبلیغی</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="text-[#3A3A3AA6] font-semibold text-sm leading-5 mb-4">تنظیمات عمومی</span>

                        <div className="flex flex-col w-full mt-4 gap-y-4">
                            <div className="w-full bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-5.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">تنظیم رمز عبور</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">مشخصات و اطلاعات فردی</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-[#F6F6F6] p-[10px_16px_10px_16px] flex gap-x-3 rounded-[8px]">
                                <div className="min-w-12 h-12 bg-[#2B39A11A] flex justify-center items-center rounded-[6px]">
                                    <img src="/images/svg/profile/img-6.svg" alt="" className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-y-[5px]">
                                        <span className="text-[#4F4F4F] font-medium text-[13px] leading-5">تنظیمات نوتیفیکیشن</span>
                                        <span className="text-[#818181] font-normal text-xs leading-5">اطلاعات فعالیت تبلیغ های شما</span>
                                    </div>
                                    <div className="w-[5px] h-[10px] cursor-pointer">
                                        <img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

export default DashboardProfile;