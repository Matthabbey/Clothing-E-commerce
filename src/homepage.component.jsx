import React from 'react';

import './homepage.styles.css';

const HomePage = () =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='comtent'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='comtent'>
                    <h1 className='title'>JACKET</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='comtent'>
                    <h1 className='title'>SNEAKER</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='comtent'>
                    <h1 className='title'>WOMENs</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='comtent'>
                    <h1 className='title'>MENs</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage