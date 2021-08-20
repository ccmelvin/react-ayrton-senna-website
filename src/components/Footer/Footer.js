import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from 'react-icons/fa';
import {
    FooterContainer,
    SocialMedia,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterStyle';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        
            <FooterContainer>
                <SocialMedia>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/AyrtonSenna.Formula1/">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/oficialayrtonsenna/?hl=en">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCMNHx0v3CePF3RFNs3mr0vg">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/ayrtonsenna">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>Ayrton Senna | Tribute © 2021 All rights reserved.</WebsiteRights>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Ayrton Senna
                        </SocialLogo>
                </SocialMedia>
            </FooterContainer>
       
    );
};

export default Footer;
