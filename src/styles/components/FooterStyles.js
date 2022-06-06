import styled from "styled-components";

const FooterStyles = styled.div`
	background: #111111;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 4rem 0;
	width: 100%;
	margin-top: 3rem;

	a {
		color: white;
		font-size: 14px;
		letter-spacing: 2px;
		font-weight: 100;
		text-decoration: none;
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		font-family: poppins;
		display: flex;
		align-items: baseline;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 1rem;
		cursor: pointer;
	}

	.icons {
		display: flex;
	}

	h5 {
		color: white;
		font-size: 16px;
		font-weight: 200;
		margin: 10px 0;
		letter-spacing: 1px;
	}

	@media screen and (min-width: 445px) {
		flex-direction: row;
		justify-content: space-evenly;
	}

	@media screen and (min-width: 768px) {
		justify-content: center;
		gap: 12rem;
	}

	@media screen and (min-width: 1023px) {
		gap: 18rem;
	}
`;

export default FooterStyles;
