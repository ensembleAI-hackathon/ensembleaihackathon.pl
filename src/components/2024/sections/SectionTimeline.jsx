const SectionTimeline = () => {
  return (
    <>
      <section className="design-section" id="timeline">
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>
              <strong>29 stycznia</strong> - Start zapisów
            </h3>
            <p>
              Od tego momentu możecie kandydatury swoich zespołów poprzez
              formularz zgłoszeniowy. Nie zwlekajcie, ponieważ liczba miejsc
              jest ograniczona!
            </p>
          </div>

          <div className=" timeline-component timeline-content">
            <h3>
              <strong>28 lutego</strong> - Tutorial wprowadzający do zadania
            </h3>
            <p>
              {" "}
              Przed wydarzeniem odbył się wstęp teoretyczny do zadania z którym
              się zmierzycie. Nagranie dostępne jest już w serwisie YouTube:{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCKgDCj8hnexHb4RbGyruxsQ"
                style={{ color: "#e82e89" }}
              >
                {" "}
                link
              </a>
              . Wkrótce otrzymacie również podstawowe kody, z którymi możecie
              się zapoznać przed wyzwaniem.
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
              <strong>3 marca</strong> - Ostateczny termin zgłoszeń
            </h3>
            <p>
              Ostatni dzień przyjmowania zgłoszeń. Po tym dniu będziecie musieli
              potwierdzić swoją obecność na wydarzeniu, a w przypadku zwolnienia
              miejsc do konkursu wejdą zespoły z listy rezerwowej!
            </p>
          </div>

          <div className="timeline-component timeline-content">
            <h3>
              <strong>16 marca</strong> - Otwarcie wydarzenia
            </h3>
            <p>
              {" "}
              W sobotę rano nastąpi uroczyste otwarcie imprezy, a chwilę po nim
              rozpoczniecie kodowanie. W trakcie czekają na Was pyszne posiłki i
              inne niespodzianki!
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
              <strong>17 marca</strong> - Wyłonienie zwycięskich drużyn
            </h3>
            <p>
              {" "}
              W niedzielne popołudnie będzie już po wszystkim - zwycięzcy
              zostaną nagrodzeni, a pozostali będą mogli spróbować swoich sił
              ponownie w kolejnej edycji wydarzenia!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTimeline;
