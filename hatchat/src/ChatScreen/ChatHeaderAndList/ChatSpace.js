import HeaderBox from "./HeaderBox";
import UserImageLeftTopCorner from "./UserImageLeftTopCorner";

function ChatSpace({children}) {
    return (<>
            <div className=" col-md-3 g-0 chatScreen">
                {children}
            </div>
        </>
    );
}

export default ChatSpace;