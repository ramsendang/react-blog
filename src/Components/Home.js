import {React} from 'react';
import music from '../images/music.webp';
import profileimg from '../images/profile.webp';
import managementimg from '../images/management.webp';
import lifestyle from '../images/lifestyle.webp';

function Home(){
    return(
        <>
        <section className='banner_section'>
            <div className='banner_content'>
                <div className='front_card'>
                    <div className='cart'>
                        <img src={music}/>
                        <div className='card_content'>
                            <p className='first_cart_category'><span>Music</span></p>
                            <h3 className='first_cart_heading'>What Your Music Preference Says About You and Your Personality.</h3>
                            <div className='card_info'>
                                <div className='profile_container'>
                                    <a href="" className='profile'><img className='profile_image' src={profileimg}  alt="profileimage"/></a>
                                </div>
                                <div className='profile_info'>
                                    <a href=''>John Doe *</a>
                                    <span> December 19,2017</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='back_card'>
                    <div className='back_card_item'>
                        <div className='second_cart'>
                            <img src={managementimg}/>
                            <div className='card_content'>
                                <p className='second_cart_category'><span>Management</span></p>
                                <h3 className='second_cart_heading'>The Pomodoro Technique Really Works.</h3>
                                <div className='card_info'>
                                <div className='profile_container'>
                                    <a href="" className='profile'><img className='profile_image' src={profileimg}  alt="profileimage"/></a>
                                </div>
                                <div className='profile_info'>
                                    <a href=''>John Doe *</a>
                                    <span> December 19,2017</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='back_card_item'>
                        <div className='second_cart'>
                            <img src={lifestyle}/>
                            <div className='card_content'>
                                <p className='second_cart_category'><span>Lifestyle</span></p>
                                <h3 className='second_cart_heading'>Throwback To The Good Old Days. </h3>
                                <div className='card_info'>
                                    <div className='profile_container'>
                                        <a href="" className='profile'><img className='profile_image' src={profileimg}  alt="profileimage"/></a>
                                    </div>
                                    <div className='profile_info'>
                                        <a href=''>John Doe *</a>
                                        <span> December 19,2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    );
}

export default Home;