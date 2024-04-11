
import { useState } from "react";

const HamburgerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setSubMenuOpen(null);
    };

    const handleSubMenuEnter = (index) => {
        setSubMenuOpen(index);
    };

    const handleSubMenuLeave = (index) => {
        setSubMenuOpen(index === subMenuOpen ? null : index);
    };

    return (
        <>
            <div className={`menu-bar${isOpen ? ' active' : ''}`}>
                <ul className="open-menu">
                    <li>
                        <a href="#" onMouseEnter={() => handleSubMenuEnter(0)} onMouseLeave={() => handleSubMenuLeave(0)}>About Us<span>

                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onMouseEnter={() => handleSubMenuEnter(1)} onMouseLeave={() => handleSubMenuLeave(1)}>Admission<span>

                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onMouseEnter={() => handleSubMenuEnter(2)} onMouseLeave={() => handleSubMenuLeave(2)}>Academics<span>

                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onMouseEnter={() => handleSubMenuEnter(3)} onMouseLeave={() => handleSubMenuLeave(3)}>Activities<span>

                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">Galleries</a>
                    </li>
                    <li>
                        <a href="/">Press Releases</a>
                    </li>
                </ul>


                <div className="menu-info">
                    <ul>
                        <li>Central Board of Secondary Education</li>
                        <li>Department of Elementary Education</li>
                        <li>Admission Number</li>
                    </ul>
                </div>



                <div className="header-social-icons">
                    <ul>
                        <li><a href="#" target="_blank"><img src="/images/icon1.svg" alt="Logo" width={40} height={40} /></a></li>
                        <li><a href="#" target="_blank"><img src="/images/icon2.svg" alt="Logo" width={40} height={40} /></a></li>
                        <li><a href="#" target="_blank"><img src="/images/icon3.svg" alt="Logo" width={40} height={40} /></a></li>
                        <li><a href="#" target="_blank"><img src="/images/icon4.svg" alt="Logo" width={40} height={40} /></a></li>
                    </ul>
                </div>
            </div>

            <div className="new-header-create">
                <div className="container">
                    <div className="main-colum-fx">
                        <div className="logo-new">
                            <img src="images/homepage/Logo.png" />
                        </div>
                        
                        <div className="manu-toggle">

                        <div class="button-header-popup">
                            <a href="#"><img src="images/homepage/1icon.svg" />Student Login</a>
                        </div>
                        <div class="button-header-popup">
                            <a href="#"><img src="images/homepage/2icon.svg" />Enroll Alumni</a>
                        </div>
                        <div class="button-header-popup">
                            <a href="#"><img src="images/homepage/3icon.svg" />Pay Fee</a>
                        </div>

                            <button type="button" className="header-hamburger" onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub-menu-item">
                {subMenuOpen === 0 && (
                    <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                    </ul>
                )}
                {subMenuOpen === 1 && (
                    <ul className="sub-menu">
                        <li><a href="#">Submenu 2 Item 1</a></li>
                        <li><a href="#">Submenu 2 Item 2</a></li>
                        <li><a href="#">Submenu 2 Item 3</a></li>
                    </ul>
                )}
                {subMenuOpen === 2 && (
                    <ul className="sub-menu">
                        <li><a href="#">Submenu 3 Item 1</a></li>
                        <li><a href="#">Submenu 3 Item 2</a></li>
                        <li><a href="#">Submenu 3 Item 3</a></li>
                    </ul>
                )}
                {subMenuOpen === 3 && (
                    <ul className="sub-menu">
                        <li><a href="#">Submenu 4 Item 1</a></li>
                        <li><a href="#">Submenu 4 Item 2</a></li>
                        <li><a href="#">Submenu 4 Item 3</a></li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default HamburgerNavbar;