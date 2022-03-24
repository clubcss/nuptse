import styled from "styled-components";

export const SponsorWrapper = styled.div`
	width: 100%;

	/* background-color: red; */

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;

	img {
		width: 200px;
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
