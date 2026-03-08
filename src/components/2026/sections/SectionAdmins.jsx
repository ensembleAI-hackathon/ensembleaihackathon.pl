import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ image, name, team, kolo, linkedin }) => {
  // eslint-disable-next-line react/prop-types
  const [beforeAt, afterAt] = kolo.split("@");

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
            <em className="em_kolo">
              {beforeAt}
              <br />
              {afterAt ? "@" + afterAt : ""}
            </em>
          </p>
        </div>
        {linkedin && linkedin !== "" && (
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
        )}
      </div>
    </div>
  );
};

const carouselData = [
  // project leaders
  {
    image: "images/people/remigiusz_kozicki.jpg",
    name: "Remigiusz Kozicki",
    team: "project leader",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/remigiusz-kozicki/",
  },
  {
    image: "images/people/zuzanna_waszczuk.jpg",
    name: "Zuzanna Waszczuk",
    team: "project leader",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/zuzanna-waszczuk-1a5029236/",
  },
  // team leaders
  {
    image: "images/people/aleksander_nowak.jpg",
    name: "Aleksander Nowak",
    team: "sponsors & finance team leader",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/aleksander-nowak-b56972238/",
  },
  {
    image: "images/people/michal_bloch.jpg",
    name: "Michał Bloch",
    team: "infra team leader",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/michał-bloch-323875353/",
  },
  {
    image: "images/people/natalia_curzytek.jpg",
    name: "Natalia Curzytek",
    team: "promo team leader",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/natalia-curzytek-bb085b392/",
  },
  {
    image: "images/people/franciszek_salinski.jpg",
    name: "Franciszek Saliński",
    team: "special ops team leader",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/f-salinski/",
  },
  {
    image: "images/people/jakub_worek.jpg",
    name: "Jakub Worek",
    team: "website team leader",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/jakub-worek-531611173/",
  },
  //teams
  //infra team
  {
    image: "images/people/szymon_rusiecki.jpg",
    name: "Szymon Rusiecki",
    team: "infra team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/rusiek/",
  },
  {
    image: "images/people/michal_szafarczyk.jpg",
    name: "Michał Szafarczyk",
    team: "infra team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/micha%C5%82-szafarczyk-539556252/",
  },
  {
    image: "images/people/piotr_bledowski.jpg",
    name: "Piotr Błędowski",
    team: "infra team",
    kolo: "BIT",
    linkedin:
      "https://www.linkedin.com/in/piotr-b%C5%82%C4%99dowski-a09b92244/",
  },
  {
    image: "images/people/maciej_kaczkowski.jpg",
    name: "Maciek Kaczkowski",
    team: "infra team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/kaczkowski-maciej/",
  },
  {
    image: "images/people/lukasz_jaremek.jpg",
    name: "Łukasz Jaremek",
    team: "infra team",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/%C5%82ukasz-jaremek-840179211/",
  },
  {
    image: "images/people/wojtek_jasinski.jpg",
    name: "Wojtek Jasiński",
    team: "infra team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/wojciechjasinski/",
  },
  {
    image: "images/people/jan_slosarczyk.jpg",
    name: "Jan Ślosarczyk",
    team: "infra team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/jan-ślosarczyk-709481257/",
  },
    {
    image: "images/people/fabian_bicca.jpg",
    name: "Fabian Bicca",
    team: "infra team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/fabian-bicca-59248b21b/",
  },
  //sponsors & finance team
  {
    image: "images/people/karol_rogozinski.jpg",
    name: "Karol Rogoziński",
    team: "sponsors & finance team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/karol-rogozi%C5%84ski-41a60b234/",
  },
  {
    image: "images/people/ola_jamroz.jpg",
    name: "Ola Jamróz",
    team: "sponsors & finance team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/aleksandra-jamr%C3%B3z-064042228/",
  },
  {
    image: "images/people/barbara_gawlik.jpg",
    name: "Barbara Gawlik",
    team: "sponsors & finance team",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/b-gawlik/",
  },
  //promo team
  {
    image: "images/people/ola_smela.jpg",
    name: "Ola Smela",
    team: "promo team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/aleksandra-smela-391b34189/",
  },
  {
    image: "images/people/justyna_orlowska.jpg",
    name: "Justyna Orłowska",
    team: "promo team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/justyna-or%C5%82owska-b8946b317/",
  },
  {
    image: "images/people/mikolaj_pajor.jpg",
    name: "Mikołaj Pajor",
    team: "promo team",
    kolo: "BIT",
    linkedin: "https://www.linkedin.com/in/pejdzor/",
  },
  {
    image: "images/people/dominik_gawel.jpg",
    name: "Dominik Gaweł",
    team: "promo team",
    kolo: "KNUM",
    linkedin: "https://www.linkedin.com/in/dominik--gawel/",
  },
  {
    image: "images/people/kuba_halaczkiewicz.jpg",
    name: "Kuba Hałaczkiewicz",
    team: "promo team",
    kolo: "KNDS",
    linkedin: "",
  },
  //special ops
  {
    image: "images/people/kamil_szczawinski.jpg",
    name: "Kamil Szczawiński",
    team: "special ops team",
    kolo: "Golem",
    linkedin: "https://www.linkedin.com/in/kamil-szczawinski/",
  },
  {
    image: "images/people/mateusz_galeziewski.jpg",
    name: "Mateusz Gałęziewski",
    team: "special ops team",
    kolo: "KNDS",
    linkedin:
      "https://www.linkedin.com/in/mateusz-ga%C5%82%C4%99ziewski-452191247/",
  },
  {
    image: "images/people/aleksandra_kukulka.jpg",
    name: "Aleksandra Kukułka",
    team: "special ops team",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/aleksandra-kukula/",
  },
  {
    image: "images/people/piotr_cywoniuk.jpg",
    name: "Piotr Cywoniuk",
    team: "special ops team",
    kolo: "KNDS",
    linkedin: "https://www.linkedin.com/in/piotr-cywoniuk-61919b309",
  },
  //photographer
  {
    image: "images/people/kuba_psarski.jpg",
    name: "Kuba Psarski",
    team: "photographer",
    kolo: "",
    linkedin: "https://www.linkedin.com/in/jakub-psarski/",
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
          className="long_img"
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
