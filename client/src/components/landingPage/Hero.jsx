import React from "react";
import { Navigate } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="container"
        style={{
          minHeight: "80vh",
          display: "flex",
          border: "2px solid black",
          flexDirection: "row",
        }}
      >
        <div
          className="left"
          style={{
            border: "2px solid blue",
            padding: "10% 3%",
            flex: "0 0 40%", // Flex-basis set to 40% for the left div
          }}
        >
          <p
            style={{
              color: "#1a202c",
              marginBottom: "4%",
              fontWeight: "bold",
              fontFamily: "Inter, system-ui",
              fontSize: "48px",
              lineHeight: "60px",
            }}
          >
            Beautiful React Templates
            <span style={{ color: "#6415ff" }}> For you</span>
          </p>
          <p
            style={{
              color: "#243e63",
              marginBottom: "3%",
              fontFamily: "Inter, system-ui",
              fontSize: "18px",
              lineHeight: "27px",
              textAlign: "left",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit at
            est, fugiat perspiciatis asperiores culpa eius adipisci accusamus
            atque obcaecati, odio officia minima debitis incidunt omnis sunt
            maiores, minus reiciendis explicabo sapiente?
          </p>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              Navigate("/home");
            }}
          >
            Primary
          </button>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid red",
            flex: "0 0 60%", // Flex-basis set to 60% for the right div
          }}
        >
          <img src="https://via.placeholder.com/580" alt="placeholder" />
        </div>
      </div>
    </>
  );
};

export default Hero;
