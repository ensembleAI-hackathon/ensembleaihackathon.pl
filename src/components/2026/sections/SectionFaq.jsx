import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../../styles/faq.css";

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className={`faq-question ${isOpen ? "active" : ""}`} onClick={onClick}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const SectionFaq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: t("faqQuestion1"), answer: t("faqAnswer1") },
    { question: t("faqQuestion2"), answer: t("faqAnswer2") },
    { question: t("faqQuestion3"), answer: t("faqAnswer3") },
    { question: t("faqQuestion4"), answer: t("faqAnswer4") },
    { question: t("faqQuestion5"), answer: t("faqAnswer5") },
    { question: t("faqQuestion6"), answer: t("faqAnswer6") },
    { question: t("faqQuestion7"), answer: t("faqAnswer7") },
    { question: t("faqQuestion8"), answer: t("faqAnswer8") },
    { question: t("faqQuestion9"), answer: t("faqAnswer9") },
    { question: t("faqQuestion10"), answer: t("faqAnswer10") },
    { question: t("faqQuestion11"), answer: t("faqAnswer11") },
    { question: t("faqQuestion12"), answer: t("faqAnswer12") },
    { question: t("faqQuestion13"), answer: t("faqAnswer13") },
    { question: t("faqQuestion14"), answer: t("faqAnswer14") },
    { question: t("faqQuestion15"), answer: t("faqAnswer15") },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="logo_section">
      <h3>
        {t("faq")} <strong>_</strong>
      </h3>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFaq;
