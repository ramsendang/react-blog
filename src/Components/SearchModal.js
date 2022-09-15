import {React, useState} from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";


function SearchModel(){
    const [search, setSearch] = useState(false);
    const openModel = ()=>{
        setSearch(true);
    }
    const hideModel = ()=>{
        setSearch(false);
    }
    return(
        <>
            <div className='serch_menu'>
                <button className='search_menu_link' onClick={openModel}><span>search</span><p><FaSearch/></p></button>
            </div>
            {search?<div className="modelbox">
                <p onClick={hideModel}><FaWindowClose/></p>
                <div className="modelbox_content">
                    <div> <label>Search for:</label></div>
                    <input tyep="text" placeholder="Type Keywords"/>
                    <h3>Press Enter to begain yor search</h3>
                </div>
            </div> :null}
        </>
    );
}

export default SearchModel;