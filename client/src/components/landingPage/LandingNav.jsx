import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "white", padding: "2% 5%" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "#243e63" }}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav" style={{ alignItems: "center" }}>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link className="nav-link" to="/">
                Features
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link className="nav-link" to="/">
                Pricing
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link className="nav-link" to="/">
                Disabled
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/home">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
