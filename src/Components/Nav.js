import '../css/nav.css';

function Nav(){
    return(
        <nav className="nav">
            <section className='navigation_section'>
                <div className='first_nav'>
                    <div className='social_menu'>
                    <a href='facebook.com' className='social_links first_menu_link'>facebook</a>
                    <a href='facebook.com' className='social_links first_menu_link'>Twitter</a>
                    </div>
                    <div className='logo'>
                        <a href='facebook.com' className='logo_link'>Blogs Daily</a>
                    </div>
                    <div className='serch_menu'>
                        <a href='logo.com' className='first_menu_link'>search</a>
                    </div>
                </div>
                <div className='second_nav'>
                    <ul>
                        <li><a href='home.com'>Home</a></li>
                        <li><a href='home.com'>Home</a></li>
                        <li><a href='home.com'>Home</a></li>
                        <li><a href='home.com'>Home</a></li>
                    </ul>
                </div>
            </section>
        </nav>
    );
}

export default Nav;