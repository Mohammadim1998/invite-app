"use client";
import { useState } from "react";
import Tab from "./tab";

const Tabbar = ({ setContent }) => {
    const [active, setActive] = useState("invites");
    return (
        <div className="w-full flex justify-between items-center">
            <Tab img={"/images/svg/tabbar/inviteAdv.svg"} img1={"/images/svg/tabbar/inviteAdvActive.svg"} title="دعوت ها" content="invites" setContent={setContent} active={active} setActive={setActive} />
            <Tab img={"/images/svg/tabbar/actionAdv.svg"} img1={"/images/svg/tabbar/actionAdvActive.svg"} title="فعالیت تبلیغی" content="actionADV" setContent={setContent} active={active} setActive={setActive} />
            <Tab img={"/images/svg/tabbar/precedentAdv.svg"} img1={"/images/svg/tabbar/actionAdvActive.svg"} title="سوابق گذشته" content="pastPrecedent" setContent={setContent} active={active} setActive={setActive} />
            <Tab img={"/images/svg/tabbar/certificationAdv.svg"} img1={"/images/svg/tabbar/certificationAdvActive.svg"} title="گواهی تبلیغ" content="certificationADV" setContent={setContent} active={active} setActive={setActive} />
        </div>
    );
}

export default Tabbar;