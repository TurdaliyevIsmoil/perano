import { useState } from "react";
import HeroSection from "../../components/heroSection";
import InfoSection from "../../components/info";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { aboutData, discoverData, letterData } from "../../components/info/Data";
import services from "../../components/services";
import Service from "../../components/services";
import Footer from "../../components/footer";

export default function MainPage(props) {
  const [isOpenedSide, setisOpenedSide] = useState(false);

  const toggleSidebar = () => {
    setisOpenedSide(!isOpenedSide);
  };
  return (
    <>
      <Navbar open={toggleSidebar} />
      <Sidebar in={isOpenedSide} close={toggleSidebar} />
      <HeroSection />
      <InfoSection data={aboutData}/>
      <InfoSection data={discoverData}/>
      <Service/>
      <InfoSection data={letterData}/>
      <Footer />
    </>
  );
}
