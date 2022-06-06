import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import LandingStyles from "../styles/sections/LandingStyles";
import firstImg from "../images/landing001.jpeg";
import manImg from "../images/menslanding.jpeg";
import womensWear from "../images/womenswear.jpeg";
import jewelery from "../images/jewelery.jpeg";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Landing = () => {
	return (
		<LandingStyles>
			<div className="banner-container">
				<img src={firstImg} alt="" />
				<div className="banner-content">
					<h1>
						EXPLORE <br /> NEW ARRIVALS
					</h1>
					<Button content="Shop Now" link="/products" />
				</div>
			</div>
			<div className="wrapper">
				<div className="content">
					<div className="img-wrapper">
						<img src={womensWear} alt="women models" />
					</div>
					<div className="text-wrapper">
						<p>Explore new styles in women’s</p>
						<Link to="/products">
							View <Icon icon="ep:arrow-right" />
						</Link>
					</div>
				</div>
				<div className="content">
					<div className="img-wrapper">
						<img
							src={manImg}
							alt="male model wearing black beanie and tan jacket"
						/>
					</div>
					<div className="text-wrapper">
						<p>All new jacket's for men’s</p>
						<Link to="/products">
							View <Icon icon="ep:arrow-right" />
						</Link>
					</div>
				</div>
				<div className="content">
					<div className="img-wrapper">
						<img src={jewelery} alt="women model wearing jewelery" />
					</div>
					<div className="text-wrapper">
						<p>Explore jewlery collection</p>
						<Link to="/products">
							View <Icon icon="ep:arrow-right" />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</LandingStyles>
	);
};

export default Landing;
