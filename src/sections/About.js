import img1 from "../images/about1.jpeg";
import img2 from "../images/about2.jpeg";
import img3 from "../images/about3.jpeg";
import img4 from "../images/about4.webp";
import {
	AboutStyles,
	Banner,
	Content,
	Container,
	Footer,
} from "../styles/sections/AboutStyles";
import { Icon } from "@iconify/react";

const About = () => {
	return (
		<AboutStyles>
			<Banner className="banner">
				<img src={img1} alt="" />
				<h1>
					SUPPORTING ARTISTS <br />& <br /> CREATORS SINCE 22'
				</h1>
			</Banner>
			<Content>
				<h2>WHO WE ARE</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
					egestas, ac scelerisque ante pulvinar.
					<br />
					Pellentesque feugiat egestas ipsum et scelerisque. Praesent eu purus
					blandit, pharetra orci a, eleifend urna. Donec diam lacus, posuere sed
					hendrerit eget, condimentum sed velit. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; In eu maximus
					augue, dapibus maximus massa. Integer nunc ex, condimentum mattis nunc
					id, mollis varius nisi.
				</p>
			</Content>
			<Container>
				<div className="top-content">
					<div className="image-container">
						<img src={img2} alt="models in the city" />
					</div>
					<div className="content-wrapper">
						<h3>EMBRACING THE DIFFERENCES</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar.
						</p>
					</div>
				</div>
				<div className="center-content">
					<div className="image-container">
						<img src={img3} alt="4 models wearing suits" />
					</div>
					<div className="content-wrapper">
						<h3>STYLES FOR EVERYONE</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar.{" "}
						</p>
					</div>
				</div>
				<div className="last-content">
					<div className="image-container">
						<img src={img4} alt="volunteers handing out items" />
					</div>
					<div className="content-wrapper">
						<h3>GIVING BACK TO THE COMMUNITY</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar.{" "}
						</p>
					</div>
				</div>
			</Container>
			<Content className="mission-content">
				<h2>OUR MISSION</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
					egestas, ac scelerisque ante pulvinar.{" "}
				</p>
			</Content>
			<Footer>
				<div className="title">
					<h2>WHY CHOOSE US</h2>
				</div>
				<div className="icons">
					<div className="icon">
						<h3>FAST & RELIABLE SHIPPING</h3>
						<Icon icon="akar-icons:shipping-box-01" width={30} />
					</div>
					<div className="icon">
						<h3>24 HOUR CUSTOMER SERVICE</h3>
						<Icon icon="carbon:user-service-desk" width={30} />
					</div>
					<div className="icon">
						<h3>30 DAY RETURNS & EXCHANGES</h3>
						<Icon icon="fluent:tag-reset-20-regular" width={30} />
					</div>
				</div>
			</Footer>
		</AboutStyles>
	);
};

export default About;
