import React from 'react'

import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Children</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam, maxime laborum reprehenderit necessitatibus quod? Deleniti autem, nostrum error ea voluptas tempore ducimus illo quibusdam! Ab hic aspernatur repellendus quod.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate numquam quas reprehenderit nesciunt ratione labore velit aut, natus quo dolores, optio eveniet impedit. Consectetur fugiat exercitationem est dignissimos quibusdam eaque.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>Manolo</span>
                    <span className="copyright">© Copyright 2023. All Rights Reserved.</span>
                </div>
                <div className="right">

                    <img src="/img/payment.png" alt="payments" />
                </div>
            </div>

        </div>
    )
}

export default Footer