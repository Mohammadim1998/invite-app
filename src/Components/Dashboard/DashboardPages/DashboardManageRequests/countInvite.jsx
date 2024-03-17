const countInvite = ({ title, count }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <span className="text-[#2B39A1] font-AnjomannnULTRABOLD font-semibold text-xs leading-5">{title}</span>
            <div className="flex text-[#3A3A3A] font-medium text-xs gap-x-1">
                <span className=" leading-5">{count.toLocaleString("fa-IR")}</span>
                <span className=" leading-5">دعوت</span>
            </div>
        </div>
    );
}

export default countInvite;