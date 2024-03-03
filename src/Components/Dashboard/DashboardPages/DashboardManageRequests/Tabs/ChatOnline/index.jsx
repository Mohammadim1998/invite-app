import MessageBox from "../Messages/messageBox";

const ChatOnline = () => {
    return (
        <div className="px-4 pb-[70px]">
            <MessageBox ff={3} />
            <MessageBox ff={1} />
            <MessageBox ff={2} />
        </div>
    );
}

export default ChatOnline;