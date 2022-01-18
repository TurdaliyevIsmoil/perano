import "./style.scss";
import Video from "../../videos/video.mp4";
import Button from "../../ui/button";

export default function HeroSection(props) {
  return (
    <header className="header" id="home">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content flex-center">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <Button to="signup" active="active" big={true}>
          Sign Up
        </Button>
      </div>
    </header>
  );
}
