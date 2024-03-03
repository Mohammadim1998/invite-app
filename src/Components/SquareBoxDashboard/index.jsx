const SquareBoxDashboard = ({ img, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#2B39A114] rounded-[8px] mb-2">
                <div className="w-[34px] h-[34px] flex justify-center items-center">
                    <img src={img} alt="daicon-1" className="" />
                </div>
            </div>
            <span className="text-[#818181]  font-medium text-[11px] leading-4 text-center ">{title}</span>
        </div>
    );
}

export default SquareBoxDashboard;