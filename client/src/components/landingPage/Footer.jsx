import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#00171f",
    color: "#ffffff",
    padding: "30px 50px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const linkStyle = {
    color: "#007ea7",
    textDecoration: "none",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "18px",
  };

  const socialIcons = [
    { icon: "🔗", url: "https://linkedin.com" },
    { icon: "🐦", url: "https://twitter.com" },
    { icon: "📘", url: "https://facebook.com" },
    { icon: "📸", url: "https://instagram.com" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {year} HackMate. All Rights Reserved.</p>
      <div>
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.url}
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={iconStyle}>{social.icon}</span>
          </a>
        ))}
      </div>
      <p>
        <a href="/terms" style={linkStyle}>
          Terms of Service
        </a>{" "}
        |
        <a href="/privacy" style={linkStyle}>
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
