import React from "react";
import { Container, HeadingH1, Wrapper } from "../Commons";
import jainlogo from "../../images/jainwhite.png";
import hackclub from "../../images/hackclub.png";
import mozilla from "../../images/mozilla.png";

import { SponsorWrapper } from "./sponsors.styled";

const Sponsors = () => {
	return (
		<>
			<Container id="sponsors">
				<HeadingH1>Sponsors</HeadingH1>

				<SponsorWrapper>
					<img src={jainlogo} />
					<img src={hackclub} />
					<img src={mozilla} />
				</SponsorWrapper>
			</Container>
		</>
	);
};

export default Sponsors;
