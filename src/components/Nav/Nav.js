import React from 'react';
import './Nav.scss';
import { useSelector } from 'react-redux';

const Nav = () => {
    const isMobile = useSelector((state) => state.app.device.isMobile);
    const isTablet = useSelector((state) => state.app.device.isTablet);

    const menuClick = () => {
        console.log("test");
    }

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <div className="wrapper">
                        <a href="/" className="logo">Anon</a>
                    </div>
                    {
                        isMobile || isTablet ? (
                            <div className="wrapper">
                                <i onClick={() => menuClick()} className="fas fa-bars bar-icon"/>
                            </div>
                        ) : (
                            <div className="wrapper links">
                                <a className="link" href="/">Skills</a>
                                <a className="link" href="/">Experiences</a>
                                <a className="link" href="/">Educations</a>
                                <a className="link" href="/">Galleries</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;