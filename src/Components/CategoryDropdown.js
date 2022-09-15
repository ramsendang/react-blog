import {React, useState} from 'react';
import { FaAngleDown } from "react-icons/fa";



function CategoryDropdown(){
    const [state, setstate] = useState(false);
    const showDropdown = ()=>{
        setstate(true);
    }
    const hideDropdown = ()=>{
        setstate(false);
    }
    return(
        <>
        <li className="category_dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}><a href='home.com' className="nav_menu">Categories <span><FaAngleDown/></span></a>
            {state ?<ul className="dropdown_menu">
                <li><a href="test.com">Lifestyle</a></li>
                <li><a href="test.com">Health</a></li>
                <li><a href="test.com">Family</a></li>
                <li><a href="test.com">Management</a></li>
                <li><a href="test.com">Travel</a></li>
                <li><a href="test.com">Work</a></li>
            </ul> :null}
        </li>
        </>
    );
}

export default CategoryDropdown;