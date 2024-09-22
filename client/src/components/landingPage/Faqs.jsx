import React, { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are all the templates easily customizable?",
      answer:
        "Yes, all templates are designed to be easily customizable, allowing you to modify them according to your needs.",
    },
    {
      question: "How long do you usually support a standalone template?",
      answer:
        "We usually support a standalone template for 12 months from the date of purchase.",
    },
    {
      question: "What kind of payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other popular payment methods.",
    },
    {
      question: "Is there a subscription service to get the latest templates?",
      answer:
        "Yes, we offer a subscription service that gives you access to all new templates as they are released.",
    },
  ];

  const containerStyle = {
    padding: "50px 20px",
    backgroundColor: "#ffffff",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#00171f",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#7A7A7A",
    marginBottom: "30px",
  };

  const faqItemStyle = {
    backgroundColor: "#f1f7fe",
    padding: "15px 20px",
    margin: "10px 0",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
  };

  const questionStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#00171f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const answerStyle = {
    fontSize: "16px",
    color: "#5C5C5C",
    marginTop: "10px",
    display: activeIndex === null ? "none" : "block",
    transition: "0.3s ease",
  };

  const iconStyle = {
    transform: activeIndex !== null ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        You have <span style={{ color: "#4C00FF" }}>Questions</span> ?
      </h2>
      <p style={subtitleStyle}>
        And we have got answers to all of them. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} style={faqItemStyle} onClick={() => toggleFAQ(index)}>
          <div style={questionStyle}>
            <span>{faq.question}</span>
            <span style={iconStyle}>{activeIndex === index ? "▼" : "▶"}</span>
          </div>
          <div
            style={{
              ...answerStyle,
              display: activeIndex === index ? "block" : "none",
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
