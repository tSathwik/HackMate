import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetStarted = () => {
  return (
    <section className="text-secondary body-font">
      <div className="container px-4 py-5 mx-auto">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="d-flex flex-column">
              {["STEP 1", "STEP 2", "STEP 3", "STEP 4", "FINISH"].map(
                (step, index) => (
                  <div className="d-flex mb-4" key={index}>
                    <div className="flex-shrink-0 w-25 h-25 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"></div>
                    <div className="flex-grow-1 ps-4">
                      <h2 className="fw-medium fs-6 text-dark mb-2">{step}</h2>
                      <p className="lead text-muted">
                        {index % 2 === 0
                          ? "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal."
                          : "Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter."}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="col-lg-7 col-md-6 mt-4 mt-md-0 d-flex justify-content-center">
            <img
              className="img-fluid rounded-lg"
              src="https://dummyimage.com/600x500"
              alt="step"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
