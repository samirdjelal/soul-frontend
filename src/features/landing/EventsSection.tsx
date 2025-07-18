import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      img: 'event-main.png',
      title: "SOUL Launches as UAQ Free Trade Zone's Innovation Hub",
      date: 'November 7, 2024',
      description:
        'The Umm Al Quwain Free Trade Zone (UAQ FTZ) has officially opened SOUL (Startup One UAQ Launchpad). This new startup incubator aims to empower local and international entrepreneurs...',
      link: '/events/soul-inaugurated-as-uaq-new-hub',
    },
    {
      img: 'event-ameni.png',
      title: 'Ameni Joins SOUL for Future Tech',
      description:
        'Ameni, a leader in communication & IT, joins the incubator program...',
      link: '/events/amenijoin-soul-incubator',
    },
    {
      img: 'event-freezone.png',
      title: 'The Future Hub for Startups',
      description:
        'UAQ FTZ promotes innovation & sustainable tech-focused businesses...',
      link: '/events/uaqftz-emerges-future-best-destination',
    },
    {
      img: 'event-techinc.png',
      title: 'SOUL: The New Tech Incubator',
      description: 'At SOUL, we understand every startup has a unique journey...',
      link: '/events/soul-first-incubator-opens',
    },
  ];

  return (
    <section className="events-section">
      <div className="container-wrapper">
        <div className="events-header">
          <h2>Events & Stories from the SOUL Community</h2>
          <p>
            From impactful events to inspiring founder stories — this is where
            the SOUL community comes to life.
          </p>
        </div>
        <div className="events-grid">
          {/* Main Event */}
          <div className="main-event-card">
            <img
              src={`/home/Events/${events[0].img}`}
              alt={events[0].title}
            />
            <div className="event-content">
              <h3>{events[0].title}</h3>
              <p className="event-date">{events[0].date}</p>
              <p className="event-description">
                {events[0].description}
              </p>
              <a href={events[0].link} className="event-link">
                View event →
              </a>
            </div>
          </div>

          {/* Other Events */}
          <div className="event-cards">
            {events.slice(1).map((event, index) => (
              <div key={index} className="event-card">
                <img
                  src={`/home/Events/${event.img}`}
                  alt={event.title}
                />
                <div className="event-content">
                  <h4>{event.title}</h4>
                  <p className="event-description">
                    {event.description}
                  </p>
                  <a href={event.link} className="event-link">
                    View event →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
