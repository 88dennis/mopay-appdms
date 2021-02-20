import React, {useState} from 'react'
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroComponent from '../components/HeroComponent/HeroComponent';
import InfoComponent from '../components/InfoComponent/InfoComponent';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';


import {homeObjOne} from '../components/InfoComponent/Data';
import {homeObjTwo} from '../components/InfoComponent/Data';
import {homeObjThree} from '../components/InfoComponent/Data';






const Home = () => {
console.log(homeObjOne)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle= {toggle} />
            <NavBar isOpen = {isOpen} toggle={toggle}/>
            <HeroComponent />
            <InfoComponent {...homeObjOne} />
            <InfoComponent {...homeObjTwo} />
            <Services  />
            <InfoComponent {...homeObjThree} />
          
            <Footer  />

        </div>
    )
}

export default Home
