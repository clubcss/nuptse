import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterWrap>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to="/" onClick={scroll.scrollToTop}>
								{/* <Logo size={40}/> */}
								<h1 style={{ color: "#BE58A6" }}>NUPTSE</h1>
							</SocialLogo>
							<WebsiteRights>© 2022 NUPTSE</WebsiteRights>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterWrap>
			</FooterContainer>
		</>
	);
};

export default Footer;
