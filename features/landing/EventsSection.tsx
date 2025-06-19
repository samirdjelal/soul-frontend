import React from 'react';

const EventsSection = () => {
  return (
    <section style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Events & Stories from the Soul Community
        </h2>
        <p style={{ maxWidth: '600px', color: '#555' }}>
          From impactful events to inspiring founder stories — this is where the Soul community comes to life.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem',
        }}
      >
        {/* LEFT MAIN CARD */}
        <div
          style={{
            border: '1px solid #eee',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          <img
            src="/home/Events/event-main.png"
            alt="Soul UAQ Launch"
            style={{ width: '100%', height: 'auto' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#1a4d72', fontWeight: 600 }}>
              SOUL Launches as UAQ Free Trade Zone’s Innovation Hub
            </h3>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#333' }}>
              November 7, 2024
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
              The Umm Al Quwain Free Trade Zone (UAQ FTZ) has officially opened SOUL (Startup One UAQ Launchpad).
              This new startup incubator aims to empower local and international entrepreneurs...
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: '#00a89d',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              View event →
            </a>
          </div>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {[
            {
              img: 'event-ameni.png',
              title: 'Ameni Joins SOUL for Future Tech',
              desc: 'Ameni, a leader in communication & IT, joins the incubator program...',
            },
            {
              img: 'event-freezone.png',
              title: 'The Future Hub for Startups',
              desc: 'UAQ FTZ promotes innovation & sustainable tech-focused businesses...',
            },
            {
              img: 'event-techinc.png',
              title: 'SOUL: The New Tech Incubator',
              desc: 'At SOUL, we understand every startup has a unique journey...',
            },
          ].map((event, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                border: '1px solid #eee',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={`/home/Events/${event.img}`}
                alt={event.title}
                style={{ width: '100px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                  {event.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#555' }}>{event.desc}</p>
                <a
                  href="#"
                  style={{
                    fontSize: '0.8rem',
                    color: '#00a89d',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '0.5rem',
                  }}
                >
                  View event →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
