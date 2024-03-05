import MessageBox from "./messageBox";

const Invites = () => {
    return (
        <div className="w-full px-4 pb-[70px]">
                <MessageBox ff={1} />
                <MessageBox ff={1} />
                <MessageBox ff={2} />
                <MessageBox ff={3} />
                <MessageBox ff={1} />
                <MessageBox ff={2} />
                <MessageBox ff={1} />
                <MessageBox ff={3} />
        </div>
    );
}

export default Invites;