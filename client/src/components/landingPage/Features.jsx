const featuresData = [
  {
    id: 1,
    title: "Shooting Stars",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-star-fill"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "The Catalyzer",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-circle-fill"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Neptune",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-person-fill"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Melanchole",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-music-note-beamed"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Bunker",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-circle-half"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Ramona Falls",
    description:
      "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="bi bi-shield-fill"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="text-secondary">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="lead text-muted">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="row">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-xl-4 col-md-6 mb-4">
              <div className="border p-4 rounded-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-primary mb-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  {feature.icon}
                </div>
                <h2 className="h5 text-dark fw-bold">{feature.title}</h2>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary btn-lg mt-4">Button</button>
      </div>
    </section>
  );
};

export default Features;
