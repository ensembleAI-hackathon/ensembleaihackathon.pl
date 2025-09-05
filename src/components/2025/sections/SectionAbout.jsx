import { useTranslation, Trans } from "react-i18next";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ question, answers }) => {
  return (
    <div>
      <div className="border"></div>
      <div className="round-img">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{question}</p>
          </div>
          <div className="flip-card-back">
            <p>
              {/* eslint-disable-next-line react/prop-types */}
              {answers.map((answer, index) => {
                return (
                  <span key={index}>
                    {answer}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionAbout = () => {
  const { t } = useTranslation();

  const infoData = [
    { question: `${t("when")}`, answers: [`${t("exactHackathonDate")}`] },
    {
      question: `${t("where")}`,
      answers: [`${t("csFaculty")},`, `${t("agh")}`, `${t("inKrakow")}`],
    },
    { question: `${t("team")}`, answers: [`${t("threeToFivePeople")}`] },
  ];

  return (
    <div id="about">
      <Trans i18nKey="aboutHackathonText" />
      <div id="info">
        {infoData.map((item, index) => (
          <InfoCard
            key={index}
            question={item.question}
            answers={item.answers}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionAbout;
