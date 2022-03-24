import React, { useState } from "react";
import {
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import Logo from "../Logo";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id="home">
			<HeroContent>
				<HeroH1>
					{/* <Logo size={70}/> */}
					NUPTSE
				</HeroH1>
				<HeroP>
				A fun, fast-paced, two-day collaborative event to hack and build projects for a healthy Internet and to protect the web we all love. It will be a diverse network of scientists, educators, artists, engineers, students and others as we come together in person and online to innovate in the open.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
						style={{ background: "#BE58A6", color: "white" }}
					>
						Register Now! {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
