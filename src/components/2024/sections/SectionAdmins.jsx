import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ image, name, team, kolo, linkedin }) => {
  return (
    <div className="item">
      <div className="carousel-col">
        <div className="block pics img-responsive">
          <img src={image} alt="Los Angeles" />
        </div>
        <div className="carousel-caption">
          <p>
            {name}
            <br />
            <em className="em_team">{team}</em>
            <br />
            <em className="em_kolo">{kolo}</em>
          </p>
        </div>
        <a href={linkedin} target="_blank">
          <i
            className="fa-solid fa-circle fa-lg ln_icon"
            style={{ color: "white" }}
          ></i>
          <i
            className="fa-brands fa-linkedin fa-xl ln_icon"
            style={{ color: "#e82e89" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

const carouselData = [
  {
    image: "images/people/antoni_kowalczuk.jpg",
    name: "Antoni Kowalczuk",
    team: "marketing team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/antoni-kowalczuk-j3p/",
  },
  {
    image: "images/people/franciszek_salinski.jpg",
    name: "Franciszek Saliński",
    team: "special ops",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/f-salinski/",
  },
  {
    image: "images/people/mateusz_galeziewski.jpg",
    name: "Mateusz Gałęziewski",
    team: "special ops leader",
    kolo: "KNDS",
    linkedin:
      "https://www.linkedin.com/in/mateusz-ga%C5%82%C4%99ziewski-452191247/",
  },
  {
    image: "images/people/karol_rogozinski.jpg",
    name: "Karol Rogoziński",
    team: "project leader",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/karol-rogozi%C5%84ski-41a60b234/",
  },
  {
    image: "images/people/ola_jamroz.jpg",
    name: "Ola Jamróz",
    team: "marketing team leader",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/aleksandra-jamr%C3%B3z-064042228/",
  },
  {
    image: "images/people/szymon_rusiecki.jpg",
    name: "Szymon Rusiecki",
    team: "sponsors team leader",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/rusiek/",
  },
  {
    image: "images/people/ola_smela.jpg",
    name: "Ola Smela",
    team: "marketing team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/aleksandra-smela-391b34189/",
  },
  {
    image: "images/people/michal_szafarczyk.jpg",
    name: "Michał Szafarczyk",
    team: "sponsors team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/micha%C5%82-szafarczyk-539556252/",
  },
  {
    image: "images/people/igor_kolodziej.jpg",
    name: "Igor Kołodziej",
    team: "special ops",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/igorkolodziej/",
  },
  {
    image: "images/people/wojtek_jasinski.jpg",
    name: "Wojtek Jasiński",
    team: "special ops",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/wojciechjasinski/",
  },
  {
    image: "images/people/lukasz_jaremek.jpg",
    name: "Łukasz Jaremek",
    team: "sponsors team",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/%C5%82ukasz-jaremek-840179211/",
  },
  {
    image: "images/people/przemek_pietrzak.jpg",
    name: "Przemek Pietrzak",
    team: "marketing team",
    kolo: "KNUM",
    linkedin: "https://www.linkedin.com/in/przemys%C5%82aw-pietrzak-9a5759238/",
  },
  {
    image: "images/people/dominik_gawel.jpg",
    name: "Dominik Gaweł",
    team: "marketing team",
    kolo: "KNUM",
    linkedin: "https://www.linkedin.com/in/dominik-gawe%C5%82/",
  },
  {
    image: "images/people/jan_fidor.jpg",
    name: "Jan Fidor",
    team: "special ops",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/jan-fidor-b05521228/",
  },
  {
    image: "images/people/marcin_zepp.jpg",
    name: "Marcin Zepp",
    team: "sponsors team",
    kolo: "Kernel",
    linkedin: "https://www.linkedin.com/in/marcin-zepp/",
  },
  {
    image: "images/people/jakub_sobolewski.jpg",
    name: "Kuba Sobolewski",
    team: "sponsors team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/qba-sobolewski/",
  },
  {
    image: "images/people/ola_poskrobek.jpg",
    name: "Ola Poskróbek",
    team: "marketing team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/aleksandra-poskrobek/",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SectionAdmins = () => {
  const { t } = useTranslation();

  return (
    <div id="admins" className="logo_section">
      <h3>
        {t("admins")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="short_img"
          target="_blank"
          href="https://knum.mimuw.edu.pl"
        >
          <img
            style={{ borderRadius: "5%" }}
            src="images/logos/knum_logo.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/kolonaukowedatascience/?locale=pl_PL"
        >
          <img src="images/logos/knds_logo.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/knsigolem/?locale=pl_PL"
        >
          <img
            style={{ borderRadius: "5%" }}
            src="images/logos/golem_logo.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a className="medium_img" target="_blank" href="https://knbit.edu.pl">
          <img src="images/logos/bit-logo-signed-transparent.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/KNIKernel/?locale=pl_PL"
        >
          <img
            className="img_with_background"
            src="images/logos/kolo_naukowe_informatykow_kernel.png"
            alt=""
          />
        </a>
      </div>
      <div id="logo_mlinpl">
        <a className="long_img" target="_blank" href="https://mlinpl.org">
          <img src="images/logos/MLinPL-logo-podstawowe-kontra.png" alt="" />
        </a>
      </div>
      <div className="container">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <CarouselItem
              key={index}
              image={item.image}
              name={item.name}
              team={item.team}
              kolo={item.kolo}
              linkedin={item.linkedin}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionAdmins;
