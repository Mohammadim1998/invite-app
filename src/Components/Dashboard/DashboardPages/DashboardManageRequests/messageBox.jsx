import { useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';

const messageBox = ({ title, time, location }) => {

    return (
        <div className="w-full flex flex-col shadow-[0px_0px_2px_1px_#00000026] bg-white rounded-lg mb-4">
            <div className="flex border-b-[1px] border-[#B9976C33]">
                <div className="w-16 h-16 shrink-0 bg-[#B9976C33] flex justify-center items-center rounded-[0px_8px_2px_0px]"><img src="/images/svg/tabbar/location.svg" className="w-6 h-6" alt="" /></div>
                <div className="w-full py-[9px] pr-4 pl-[11px] flex flex-col gap-y-[10px]">
                    <div className="w-full flex justify-between items-center">
                        <span className="text-[#4F4F4F] font-semibold text-xs leading-5 font-AnjomanSemiBold">{title}</span>
                        <div className="flex flex-col gap-y-[2px] child:w-1 child:h-1 child:rounded-full child:bg-[#4F4F4F]">
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>

                    <div className="flex gap-x-7">
                        <div className="flex gap-x-1 items-start">
                            <div className="w-[14px] h-[14px]"><img src="/images/svg/tabbar/clock.svg" alt="" className="w-[14px] h-[14px]" /></div>
                            <span className="text-[#616161] font-normal text-[11px] leading-4">زمان:{" "}</span>
                            <span className="text-[#4F4F4F] font-medium text-[11px] leading-4 font-AnjomanSemiBold">{time}</span>
                        </div>
                        <div className="flex gap-x-1 items-start">
                            <div className="w-[14px] h-[14px]"><img src="/images/svg/tabbar/calendar.svg" alt="" className="w-[14px] h-[14px]" /></div>
                            <span className="text-[#616161] font-normal text-[11px] leading-4">مکان:{" "}</span>
                            <span className="text-[#4F4F4F] font-medium text-[11px] leading-4 font-AnjomanSemiBold">{location}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ProgressBar */}
          
                <section class="step-wizard" dir='ltr'>
                    <ul class="step-wizard-list">
                        <li class="step-wizard-item">
                            <span class="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                            <span class="progress-label font-extralight text-[10px] leading-4">ثبت درخواست</span>
                        </li>
                        <li class="step-wizard-item">
                            <span class="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                            <span class="progress-label font-extralight text-[10px] leading-4">اعلان آمادگی مبلغ</span>
                        </li>
                        <li class="step-wizard-item current-item">
                            <span class="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                            <span class="progress-label font-extralight text-[10px] leading-4">تایید میزبان</span>
                        </li>
                        <li class="step-wizard-item">
                            <span class="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                            <span class="progress-label font-extralight text-[10px] leading-4">نظرسنجی</span>
                        </li>
                    </ul>
                </section>
            
            {/* End ProgressBar */}
        </div>
    );
}

export default messageBox;

/*
<div className="w-full flex justify-start items-center gap-x-4 border-b-[#0000000D] border-b-[1px] py-4">
            <div className="w-12 h-12"><img className="w-full h-full" src="/images/svg/tabbar/letter.svg" alt="letter" /></div>
            <div className="flex flex-col gap-y-[6px]">
                <h2 className="text-[#3A3A3A] font-medium text-xs leading-5">پیگیری ثبت فعالیت تبلیغی</h2>
                <div className="flex justify-center items-center text-[#616161D9] font-normal text-[11px] leading-4">
                    <span className="ml-[6px]">۱۵:۳۶</span> - <span className="mr-[6px]">۱۴۰۲/۰۵/۱۴</span>
                </div>
            </div>
        </div>
*/