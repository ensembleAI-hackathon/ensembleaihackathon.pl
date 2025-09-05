import { useTranslation, Trans } from "react-i18next";

const SectionTimeline = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="timeline" className="logo_section">
        <h3>
          {t("timeline")} <strong>_</strong>
        </h3>
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
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

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
    </>
  );
};

export default SectionTimeline;
