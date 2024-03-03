import { useState } from "react";
import Btn from "./Btn";

const DashboardCTRL = ({ setContent }) => {
    const [active, setActive] = useState("dashboard");

    return (
        <div className="w-screen h-[70px] bg-[#FFFFFF] shadow-[0px_-1.5px_3px_0px_#0000001A]">
            <div className="flex justify-between items-center w-screen py-[12px] px-6">
                <Btn img={"/images/svg/home/home.svg"} img1={"/images/svg/home/home1.svg"} content="dashboard" title={"خانه"} setContent={setContent} active={active} setActive={setActive} />
                <Btn img={"/images/svg/home/compas.svg"} img1={"/images/svg/home/compas1.svg"} content="dashboard2" title={"نقشه"} setContent={setContent} active={active} setActive={setActive} />
                <Btn img={"/images/svg/home/file.svg"} img1={"/images/svg/home/file1.svg"} content="dashboard3" title={"مدیریت"} setContent={setContent} active={active} setActive={setActive} />
                <Btn img={"/images/svg/home/comment.svg"} img1={"/images/svg/home/comment1.svg"} content="dashboard4" title={"پیام ها"} setContent={setContent} active={active} setActive={setActive} />
                <Btn img={"/images/svg/home/profile.svg"} img1={"/images/svg/home/profile1.svg"} content="dashboard5" title={"پروفایل"} setContent={setContent} active={active} setActive={setActive} />
            </div>
        </div>
    );
}

export default DashboardCTRL;