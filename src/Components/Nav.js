import {React, useState} from "react";
import '../css/nav.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaSearch, FaAngleDown } from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";
import BlogDropdown from "./BlogDropdown";
import SearchModel from "./SearchModal";
function Nav(){
    return(
        <>
        <nav className="nav">
            <section className='navigation_section'>
                <div className='first_nav'>
                    <div className='social_menu'>
                    <a href='facebook.com' className='social_links first_menu_link'><FaFacebookF /></a>
                    <a href='facebook.com' className='social_links first_menu_link'><FaTwitter/></a>
                    <a href='facebook.com' className='social_links first_menu_link'><FaInstagram/></a>
                    <a href='facebook.com' className='social_links first_menu_link'><FaPinterestP/></a>
                    </div>
                    <div className='logo'>
                        <a href='facebook.com' className='logo_link'>Blogs Daily</a>
                    </div>
                    <SearchModel/>
                </div>
                <div className='second_nav'>
                    <ul>
                        <li><a href='home.com' className="nav_menu">Home</a></li>
                        <CategoryDropdown/>
                        <BlogDropdown/>
                        <li><a href='home.com' className="nav_menu">Styles</a></li>
                        <li><a href='home.com' className="nav_menu">About</a></li>
                        <li><a href='home.com' className="nav_menu">Contact</a></li>
                    </ul>
                </div>
            </section>
        </nav>
        </>
    );
}

export default Nav;