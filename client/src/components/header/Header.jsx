import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img className="headerImage" src="https://image-verte.fr/wp-content/uploads/2020/09/05-08-paysage.jpg" alt="" />
        </div>
    )
}

export default Header
