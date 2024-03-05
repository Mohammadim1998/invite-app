const messageBox = ({ ff }) => {
    return (
        <div className="w-full flex justify-between items-center border-b-[#0000000D] border-b-[1px] py-4">
            <div className="flex justify-start items-center gap-x-4">
                <div className="min-w-12 min-h-12"><img className="w-full h-full" src="/images/svg/tabbar/person.svg" alt="letter" /></div>
                <div className="flex flex-col gap-y-[6px]">
                    <h2 className="text-[#3A3A3A] font-medium text-xs leading-5">دعوت از محمد هادی ابراهیمی</h2>
                    <div className="flex justify-start items-center text-[#616161D9] font-normal text-[11px] leading-4">
                        <span className="ml-[6px]">۱۵:۳۶</span> - <span className="mr-[6px]">۱۴۰۲/۰۵/۱۴</span>
                    </div>
                </div>
            </div>
            <div className="w-[100px] h-[22px]">
                {
                    ff == 1 ? (
                        <span className="text-[#C58200] font-normal text-[10px] leading-4 bg-[#FFBA331A] p-[3px_6px_3px_6px] rounded-[3px]">در حال بررسی</span>
                    ) : ff == 2 ? (
                        <span className="text-[#B3261E] font-light text-[10px] leading-4 bg-[#B3261E1A] p-[3px_6px_3px_6px] rounded-[3px]">رد شده</span>
                    ) : (
                        <span className="text-[#2C8C03] font-normal text-[10px] leading-4 bg-[#6BB04E1A] p-[3px_6px_3px_6px] rounded-[3px]">تاییده شده</span>
                    )
                }
            </div>
        </div>
    );
}

export default messageBox;