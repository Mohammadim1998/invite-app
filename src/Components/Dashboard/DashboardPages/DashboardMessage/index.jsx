"use client";
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
import BoxSearchHeader from "../../BoxSearchHeader";
import HostBox from "./boxes/hostBox";
import Support from "./boxes/support";
import Ticket from "./boxes/ticket";

const DashboardMessage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <div className="w-full bg-[#2B39A1] px-4 pt-4 rounded-[0px_0px_14px_14px]">
                <BoxSearchHeader title={"پیام‌های شما"} />
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper relative w-full mt-[44px] flex justify-between items-center"
                >
                    <SwiperSlide className="pb-4 text-center">
                        <div className="cursor-pointer text-white font-medium text-xs leading-5">همه پیام‌ها</div>

                        <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                    </SwiperSlide>
                    <SwiperSlide className="text-white pb-4 text-center">
                        <div className="cursor-pointer text-white font-medium text-xs leading-5">میزبان‌ها</div>
                        <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                    </SwiperSlide>
                    <SwiperSlide className="text-white pb-4 text-center">
                        <div className="cursor-pointer text-white font-medium text-xs leading-5">پشتیبانی</div>
                        <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                    </SwiperSlide>
                    <SwiperSlide className="text-white pb-4 text-center">
                        <div className="cursor-pointer text-white font-medium text-xs leading-5">تیکت‌ها</div>
                        <div className="activeTab absolute bottom-0 w-full h-[2px] bg-white"></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={0}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2 bg-white w-full h-dvh"
            >
                <SwiperSlide className="px-4 pt-[20px] pb-[70px] overflow-y-scroll sliderContainer1">
                    <HostBox img={"/images/svg/tabbar/person1.svg"} title={"پیگیری مراسم هیئت هفتگی"} answer={true} situation={1} btn1={"میزبان"} count={2} btn2={"اولویت بحرانی"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Support title={"پیگیری ثبت فعالیت تبلیغی"} answer={false} situation={2} btn1={"اولویت بالا"} count={2} btn2={"پشتیبانی شمع"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <HostBox img={"/images/svg/tabbar/person1.svg"} title={"پیگیری مراسم هیئت هفتگی"} answer={true} situation={1} btn1={"میزبان"} count={4} btn2={"اولویت بحرانی"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={2} btn1={"اولویت بالا"} count={2} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={false} situation={1} btn1={"اولویت بالا"} count={2} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Support title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={3} btn1={"اولویت بالا"} count={2} btn2={"پشتیبانی شمع"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={1} btn1={"اولویت بالا"} count={2} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />

                </SwiperSlide>
                <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                    <HostBox img={"/images/svg/tabbar/person1.svg"} title={"پیگیری مراسم هیئت هفتگی"} answer={true} situation={1} btn1={"میزبان"} count={2} btn2={"اولویت بحرانی"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <HostBox img={"/images/svg/tabbar/person1.svg"} title={"پیگیری مراسم هیئت هفتگی"} answer={false} situation={2} btn1={"میزبان"} count={12} btn2={"اولویت بحرانی"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <HostBox img={"/images/svg/tabbar/person1.svg"} title={"پیگیری مراسم هیئت هفتگی"} answer={true} situation={3} btn1={"میزبان"} count={3} btn2={"اولویت بحرانی"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                </SwiperSlide>
                <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                    <Support title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={1} btn1={"اولویت بالا"} count={2} btn2={"پشتیبانی شمع"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Support title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={2} btn1={"اولویت بالا"} count={6} btn2={"پشتیبانی شمع"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Support title={"پیگیری ثبت فعالیت تبلیغی"} answer={false} situation={3} btn1={"اولویت بالا"} count={4} btn2={"پشتیبانی شمع"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                </SwiperSlide>
                <SwiperSlide className="px-4 pt-[10px] pb-[70px] overflow-y-scroll sliderContainer1">
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={1} btn1={"اولویت بالا"} count={1} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={3} btn1={"اولویت بالا"} count={2} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                    <Ticket title={"پیگیری ثبت فعالیت تبلیغی"} answer={true} situation={2} btn1={"اولویت بالا"} count={5} btn2={"اولویت بالا"} time={"۱۵ : ۳۶"} date={"۱۴۰۲/۰۵/۱۴"} />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}

export default DashboardMessage;









































