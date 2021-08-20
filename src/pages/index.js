import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Dropdown from '../components/DropDown/DropDown'
import Hero from '../components/Hero/Hero'
import InfoSection from '../components/InfoSection/InfoSection'
import { sliderData } from '../mock/SliderData'
import { InfoData } from '../mock/InfoData'
import { InfoDataTwo } from '../mock/InfoData'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer/Footer'
import { FoundationData } from '../mock/Foundation'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <Fragment>
            <ScrollToTop />
            <Navbar toggle={toggle} slides={sliderData}/>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={sliderData} />
            <InfoSection {...InfoData} />
            <InfoSection {...InfoDataTwo} />
            <InfoSection {...FoundationData} />
            <Footer />
        </Fragment>
    )
}

export default Home
