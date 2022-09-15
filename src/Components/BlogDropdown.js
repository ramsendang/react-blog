import {React, useState} from 'react';
import { FaAngleDown } from "react-icons/fa";


function BlogDropdown(){
    const [state, setstate] = useState(false);
    const showDropdown = ()=>{
        setstate(true);
    }
    const hideDropdown = ()=>{
        setstate(false);
    }
    return(
        <>
            <li className="blog_dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}><a href='home.com' className="nav_menu">Blogs <span><FaAngleDown/></span></a>
                {state ?<ul className="dropdown_menu">
                    <li><a href="test.com">Video Post</a></li>
                    <li><a href="test.com">Audio Post</a></li>
                    <li><a href="test.com">Gallery Post</a></li>
                    <li><a href="test.com">Standard Post</a></li>
                    <li><a href="test.com">Travel</a></li>
                    <li><a href="test.com">Work</a></li>
                </ul> :null}
            </li>
        </>
    );
}

export default BlogDropdown;