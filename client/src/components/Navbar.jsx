import './Navbar.css';
import logo from '../assets/images/logoNew.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
    const [navItems, setNavItems] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    function toogleNavbar() {
        setNavItems(!navItems)
    }

    const { currentUser } = useSelector(state => state.user)
    function toogleNavbar() {
        setNavItems(!navItems)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        // <nav className="navbar z-20 flex items-center justify-around p-4 shadow-[0_10px_22px_rgba(29,_78,_216,_0.24)]">
        <nav
            className={`navbar z-20 flex  items-center justify-around ${isScrolled ? 'p-3' : 'px-4 py-5'
                }`}>
            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt="logo-will-appear-here" width={"155px"} height={"113px"} />
                </Link>
                <button className="navbar-toggler" onClick={toogleNavbar} aria-label={navItems ? "Close menu" : "Open menu"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)">
                        {navItems ? (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_02"> <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g>
                            </>
                        ) : (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <div className={`nav-items ${navItems ? "close" : "open"}  cursor-pointer `} >
                <Link to={'/services'}>
                    <div className="nav-links">
                        <div className="hover:text-secondary  ">
                            <span className="flex gap-1 items-center font-bold">
                                <div>
                                    Services
                                </div>
                            </span>
                        </div>

                        {/* <div className="dropDownMenu text-">
                        <ul>
                        <Link className="servicesLink font-semibold text-1xl hover:text-secondary " to="/services-document-localization">
                        
                        Document Localization
                        </Link>
                        <Link className="servicesLink hover:text-secondary  font-semibold" to="services-audio-video-localization">
                        Audiovisual Localization
                        </Link>
                        </ul>
                        </div> */}
                    </div>
                </Link>
                <Link to="/expertise" className="nav-links hover:text-secondary ">
                    <span className="flex gap-1 items-center font-bold">
                        Expertise
                    </span>
                </Link>
                <Link to="/languages" className="nav-links hover:text-secondary ">
                    <span className="flex gap-1 items-center font-bold">
                        Languages
                    </span>
                </Link>
                <Link to="/about" className="nav-links hover:text-secondary ">
                    <span className="flex gap-1 items-center font-bold">
                        About
                    </span>
                </Link>
                {/* <Link to="/contact" className="flex mt-4 sm:mt-0 text-end relative items-center contactButton drop-shadow-2xl text-white  rounded-md transform transition duration-300 ease-in-out sm:hover:scale-105">
                    <div className=" absolute left-[0px] lg:left-[-32px] bg-white p-4  border-[3px] border-primary text-primary rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#01185B" fill="none">
                            <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="p-2 ml-4 font-semibold rounded-xl w-[152px] md:w-[160px] lg:w-[130px] bg-primary">
                        <h1>Contact us</h1>
                    </div>
                </Link> */}
                <Link to='/profile'>
                    {currentUser ? (
                        <img className='rounded-full w-16 h-16 object-cover' src={currentUser.avatar} alt="profile image" />
                    ) :
                        <div className='flex items-center relative'>
                            <div className=" absolute left-[-30px] bg-white p-4  border-[3px] border-primary text-primary rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#262626" fill="none">
                                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
                                </svg>
                            </div>
                            <div className="p-2  font-semibold rounded-xl w-[152px] md:w-[160px] lg:w-[130px] bg-primary text-white ">
                                <h1 className='ml-8'>Sign In</h1>
                            </div>
                        </div>}

                </Link>
            </div>
        </nav>
    );
}
export default Navbar;