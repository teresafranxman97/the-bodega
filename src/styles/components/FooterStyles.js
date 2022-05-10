import styled from "styled-components";

const FooterStyles = styled.div`
	background: #f9f9f9;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 4rem 0;
	width: 100%;

	a {
		color: #111111;
		font-size: 16px;
		font-weight: 300;
		text-decoration: none;
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		font-family: poppins;
		display: flex;
		align-items: baseline;
		font-size: 12px;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 1rem;
		cursor: pointer;
	}

	.icons {
		display: flex;
	}

	h5 {
		color: #111111;
		font-size: 16px;
		font-weight: 500;
		margin: 10px 0;
		letter-spacing: 1px;
	}

	@media screen and (min-width: 445px) {
		flex-direction: row;
		justify-content: space-evenly;
	}

	@media screen and (min-width: 768px) {
		justify-content: center;
		gap: 4rem;
	}

	@media screen and (min-width: 1023px) {
		gap: 11rem;
	}
`;

export default FooterStyles;
