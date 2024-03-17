"use client";
import BoxSearchHeader from "../../BoxSearchHeader";
import "./tabcss.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import MessageBox from "./messageBox";
import CountInvite from "./countInvite";


const tabIndex = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",

}


const DashboardManageRequests = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [content, setContent] = useState("one");

    const getActiveIndex = (e) => {
        setContent(tabIndex[e.activeIndex])
    }



    return (
        <main className="w-screen">

            <div>
                <div className="w-full bg-[#2B39A1] px-4 pt-4 rounded-[0px_0px_14px_14px]">
                    <BoxSearchHeader title={"پیام‌های شما"} />
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper relative w-full mt-[44px] flex justify-between items-center"
                    >
                        <SwiperSlide className={`pb-4 text-center activeBG rounded-[8px_8px_0px_0px] py-[7px]`}>
                            <div onClick={() => setContent("one")} className="flex flex-col gap-y-[6px] items-center">
                                <div className="w-5 h-5">
                                    <img src={content === "one" ? "/images/svg/tabbar/inviteAdvActive.svg" : "/images/svg/tabbar/inviteAdv.svg"} alt="" className="w-5 h-5" />
                                </div>
                                <div className="cursor-pointer text-white font-normal text-xs leading-5">دعوت‌ها</div>
                                <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-white pb-4 text-center activeBG rounded-[8px_8px_0px_0px] py-[7px]`}>
                            <div onClick={() => setContent("two")} className="flex flex-col gap-y-[6px] items-center">
                                <div className="w-5 h-5">
                                    <img src={content === "two" ? "/images/svg/tabbar/actionAdvActive.svg" : "/images/svg/tabbar/actionAdv.svg"} alt="" className="w-5 h-5" />
                                </div>
                                <div className="cursor-pointer text-white font-normal text-xs leading-5">فعالیت تبلیغی</div>
                                <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className={`text-white pb-4 text-center activeBG rounded-[8px_8px_0px_0px] py-[7px]`}>
                            <div onClick={() => setContent("three")} className="flex flex-col gap-y-[6px] items-center">
                                <div className="w-5 h-5">
                                    <img src={content === "three" ? "/images/svg/tabbar/precedentAdvActive.svg" : "/images/svg/tabbar/precedentAdv.svg"} alt="" className="w-5 h-5" />
                                </div>
                                <div className="cursor-pointer text-white font-normal text-xs leading-5">سوابق گذشته</div>
                                <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className={`text-white pb-4 text-center activeBG rounded-[8px_8px_0px_0px] py-[7px]`}>
                            <div onClick={() => setContent("four")} className="flex flex-col gap-y-[6px] items-center">
                                <div className="w-5 h-5">
                                    <img src={content === "four" ? "/images/svg/tabbar/certificationAdvActive.svg" : "/images/svg/tabbar/certificationAdv.svg"} alt="" className="w-5 h-5" />
                                </div>
                                <div className="cursor-pointer text-white font-normal text-xs leading-5">گواهی تبلیغ</div>
                                <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    onSlideChange={getActiveIndex}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2 bg-white w-full h-dvh"
                >
                    <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های جاری"} count={2} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های بسته شده"} count={3} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                    </SwiperSlide>
                    <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های جاری"} count={2} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های بسته شده"} count={6} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                    </SwiperSlide>
                    <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های جاری"} count={2} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های بسته شده"} count={1} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                    </SwiperSlide>
                    <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های جاری"} count={2} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <div className="mb-4 w-full">
                            <CountInvite title={"دعوت‌های بسته شده"} count={3} />
                        </div>
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                        <MessageBox title={"مسجد امام حسین علیه السلام"} time={"۱۸ آذر الی ۲۰ آذر"} location={"قم، نیروگاه"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
}

export default DashboardManageRequests;