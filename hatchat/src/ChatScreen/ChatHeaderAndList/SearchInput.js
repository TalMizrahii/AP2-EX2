import {useRef, useState} from "react";

function SearchInput({doSearch}) {

    const searchBox = useRef(null);

    const handleOnKeyUp = function (){
        doSearch(searchBox.current.value);
    }


    return (<div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
               aria-describedby="search-addon" ref={searchBox} onKeyUp={handleOnKeyUp} />
    </div>);
}
export default SearchInput;