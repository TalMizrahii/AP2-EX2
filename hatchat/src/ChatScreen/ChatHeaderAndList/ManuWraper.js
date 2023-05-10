import MenuBtn from "./MenuBtn";

function ManuWrapper({children}) {
    return (
        <div id="menu-group-btn" className="btn-group">
            <MenuBtn/>
            <ul className="dropdown-menu dropdown-menu-end">
                {children}
            </ul>
        </div>
    );
}

export default ManuWrapper;