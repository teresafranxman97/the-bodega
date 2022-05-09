import LandingStyles from "../styles/sections/LandingStyles";
import firstImg from "../images/landingimage1.webp";
import secImg from "../images/menslanding.jpeg";
import thirdImg from "../images/pexels-photo-4668565.jpeg";

const Landing = () => {
    return (
			<LandingStyles>
				<div className="first container">
					<img src={firstImg} alt="" />
					<div className="content">
						<h1>
							Explore Our 2022
							<br /> Jewelry Collection
						</h1>
						{/* <Button content="Shop Now" link="/products" /> */}
					</div>
				</div>
				<div className="second container">
					<img src={secImg} alt="male model leaning on car" className="img-two" />
					<div className="content-two">
						<h1>All new in mens wear</h1>
						{/* <Button content="Shop Now" link="/products" /> */}
					</div>
				</div>
				<div className="container three">
					<img src={thirdImg} alt="female model with flower shirt and bag" />
					<div className="content-three">
						<h1>Spring trends for women</h1>
						{/* <Button content="Shop Now" link="/products" /> */}
					</div>
				</div>
			</LandingStyles>
		);
}

export default Landing;