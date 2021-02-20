import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
// import {Button} from '../ButtonElements';
import {Button2} from '../ButtonElements';

const HeroComponent = () => {

    const [hover, setHover]= useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Money Tracking Made Easy
                </HeroH1>
                <HeroP>
                    Signup for a new account today
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                    to="/signin"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroComponent
