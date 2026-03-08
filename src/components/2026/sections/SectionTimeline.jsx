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

    <section className="schedule-section">
      <div className="schedule-days">
        <div className="schedule-day">
          <div className="schedule-day-header">
            <h3>{t('scheduleSaturday')}</h3>
            <span className="schedule-date">{t('scheduleSatDate')}</span>
          </div>
          <ul className="schedule-items">
            <li className="schedule-item">
              <span className="schedule-time">8:30</span>
              <span className="schedule-label">{t('scheduleSat830')}<sup>*</sup></span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">10:00</span>
              <div className="schedule-label-wrap">
                <span className="schedule-label">{t('scheduleSat1000')}</span>
                <span className="schedule-desc">{t('scheduleSat1000Desc')}</span>
              </div>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">12:00</span>
              <span className="schedule-label">{t('scheduleSat1200')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">14:00</span>
              <span className="schedule-label">{t('scheduleSat1400')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">20:00</span>
              <span className="schedule-label">{t('scheduleSat2000')}</span>
            </li>
          </ul>
        </div>

        <div className="schedule-day">
          <div className="schedule-day-header">
            <h3>{t('scheduleSunday')}</h3>
            <span className="schedule-date">{t('scheduleSunDate')}</span>
          </div>
          <ul className="schedule-items">
            <li className="schedule-item">
              <span className="schedule-time">12:00</span>
              <span className="schedule-label">{t('scheduleSun1200Coding')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">12:00</span>
              <span className="schedule-label">{t('scheduleSun1200Lunch')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">13:00</span>
              <span className="schedule-label">{t('scheduleSun1300')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">14:30</span>
              <span className="schedule-label">{t('scheduleSun1430')}</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-time">15:00</span>
              <span className="schedule-label">{t('scheduleSun1500')}</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="schedule-footnote">{t('scheduleFootnote')}</p>
    </section>
  </>);
};

export default SectionTimeline;