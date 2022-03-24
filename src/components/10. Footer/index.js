import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
    
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={scroll.scrollToTop}><Logo size={40}/></SocialLogo>
                            <WebsiteRights>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WebsiteRights>

                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
