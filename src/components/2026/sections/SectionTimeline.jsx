import { useTranslation, Trans } from 'react-i18next';

const SectionTimeline = () => {
  const { t } = useTranslation();

  return (<>
    {/* <div id="timeline" className="logo_section">
      <h3>{t("timeline")} <strong>_</strong></h3>
      <div className="logo_mini">
        {t("timelineSoon")}
      </div>
    </div> */}
    {/* Przed wydarzeniem odbył się wstęp teoretyczny do zadania z którym się zmierzycie. Nagranie dostępne jest już w serwisie YouTube: <a target="_blank" href="https://www.youtube.com/channel/UCKgDCj8hnexHb4RbGyruxsQ" style={{color: "#e82e89"}} > link</a>. Wkrótce otrzymacie również podstawowe kody, z którymi możecie się zapoznać przed wyzwaniem. */}
    {/* NIE USUWAC TEGO KOMENTARZA BO TRZEBA BEDZIE PO COMMITACH SZUKAC KODU */}
    <div id="timeline" className="logo_section">
      <h3>{t("timeline")} <strong>_</strong></h3>
    </div>
    <section className="design-section">
    <div className="timeline">
      <div className="timeline-component timeline-content">
        <h3>
          <Trans i18nKey="registrationStarts" />
        </h3>
          <p>
            <Trans i18nKey="registrationStartsText" />
          </p>
      </div>

      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>

      <div className="timeline-empty"></div>

      {/* <div className=" timeline-component timeline-content">
        <h3>
          <Trans i18nKey="introductionToTasks" />
        </h3>
          <p>
            <Trans i18nKey="introductionToTasksText" />
          </p>
      </div>

      <div className="timeline-middle">
          <div className="timeline-circle"></div>
      </div>

      <div className="timeline-empty"></div> */}

      <div className="timeline-empty"></div>

      <div className="timeline-middle">
          <div className="timeline-circle"></div>
      </div>

      <div className="timeline-component timeline-content">
        <h3>
          <Trans i18nKey="deadlineForApplications" />
        </h3>
          <p>
            <Trans i18nKey="deadlineForApplicationsText" />
          </p>
      </div>

      <div className="timeline-component timeline-content">
        <h3>
          <Trans i18nKey="eventOpening" />
        </h3>
          <p>
            <Trans i18nKey="eventOpeningText" />  
          </p>
      </div>

      <div className="timeline-middle">
          <div className="timeline-circle"></div>
      </div>
      <div className="timeline-empty">
      </div>

      <div className="timeline-empty">
      </div>

      <div className="timeline-middle">
          <div className="timeline-circle"></div>
      </div>

      <div className="timeline-component timeline-content">
        <h3>
          <Trans i18nKey="selectionOfTheWinningTeams" />
        </h3>
          <p>
            <Trans i18nKey="selectionOfTheWinningTeamsText" />
          </p>
      </div>

    </div> 
    </section>
  </>);
};

export default SectionTimeline;