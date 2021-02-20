import React, {useState, useEffect} from "react";
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
import {IconContext } from 'react-icons/lib';

import {animateScroll as scroll } from 'react-scroll';

const NavBar = ({toggle, isOpen}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);

        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)

        return ()=>{
            window.removeEventListener('scroll', changeNav)
        }
    },[]);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

   function handleSetActive(to) {
        console.log(to);
      }

      function handleSetInactive(from) {
        console.log(from);

      }
  return (
    <>

    <IconContext.Provider value={{color: '#fff'}}>
        <Nav isOpen={isOpen} scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    mopay
                </NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={200}
                        spy={true}
                        // hashSpy={true}
                        isDynamic={true}
                        exact='true'
                        offset={-80}
                        activeClass="active"
                        // onSetActive={handleSetActive}
                        // onSetInactive={handleSetInactive}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                             smooth={true}
                             duration={200}
                             spy={true}
                            //  hashSpy={true}
                             isDynamic={true}
                             exact='true'
                             offset={-80}
                             activeClass="active"
                            //  onSetActive={handleSetActive}
                            //  onSetInactive={handleSetInactive}
                        >
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                            smooth={true}
                            duration={200}
                            spy={true}
                            // hashSpy={true}
                            isDynamic={true}
                            exact='true'
                            offset={-80}
                            activeClass="active"
                            // onSetActive={handleSetActive}
                            // onSetInactive={handleSetInactive}
                        >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                            smooth={true}
                            duration={200}
                            spy={true}
                            // hashSpy={true}
                            isDynamic={true}
                            exact='true'
                            offset={-80}
                            activeClass="active"
                            // onSetActive={handleSetActive}
                            // onSetInactive={handleSetInactive}
                        >
                            Signup
                        </NavLinks>
                    </NavItem>
                 
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default NavBar;
