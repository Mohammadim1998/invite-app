"use client";
import DashboardHome from "../DashboardPages/DashboardHome";
import DashboardLocation from "../DashboardPages/DashboardLocation";
import DashboardProfile from "../DashboardPages/DashboardProfile";
import DashboardMessage from "../DashboardPages/DashboardMessage";
import DashboardManageRequests from "../DashboardPages/DashboardManageRequests";
import DashboardCTRL from "../Dashboard-ctrl";
import { useEffect, useState } from "react";

const mainDashboard = () => {
    const [detail, setDetail] = useState(<DashboardHome />);
    const [content, setContent] = useState("dashboard");

    useEffect(() => {
        if (content == "dashboard") {
            setDetail(<DashboardHome />);
        } else if (content == "dashboard2") {
            setDetail(<DashboardLocation />);
        } else if (content == "dashboard3") {
            setDetail(<DashboardManageRequests />);
        } else if (content == "dashboard4") {
            setDetail(<DashboardMessage />);
        } else if (content == "dashboard5") {
            setDetail(<DashboardProfile />);
        }
    }, [content])

    return (
        <div className="relative w-full">
            {detail}
            <section className="z-30 w-screen fixed bottom-0 left-0">
                <DashboardCTRL setContent={setContent} />
            </section>
        </div>
    );
}

export default mainDashboard;