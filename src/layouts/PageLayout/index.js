//NOT EDITABLE!!!
import Topography from "../../components/Topography";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

// EDITABLE
import background from "../../assets/img/9.jpg"; //Background
import logo from "../../assets/img/logo.png"; //Logo

function pageLayout(props) {
  //EDITABLE
  const deskripsi = "Selamat datang kembali di";
  const title1 = "DIY Blended Learning";
  const title2 = "";
  const slogan =
    "Seperti Laskar pelangi, raihlah bintangmu dan lampaui batasanmu. Lihatlah lembar Ujianmu bukan sebagai beban hidupmu tapi sebagai peluang untuk menuju gerbang kesuksesanmu.";
  const copyright = "2021 DIY Blended Learning - Didukung oleh Geschool";

  return (
    <div>
      <Topography />
      <Hero
        logo={logo}
        background={background}
        deskripsi={deskripsi}
        title1={title1}
        title2={title2}
        slogan={slogan}
        appName={props.appName}
      >
        {props.children}
      </Hero>
      <Footer copyright={copyright} />
    </div>
  );
}

export default pageLayout;
