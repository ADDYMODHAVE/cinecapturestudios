import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark mt-2 d-flex  flex-column align-items-center">
      <address
        className=" text-light text-center fw-bold "
        style={{ fontSize: "15px" }}
      >
        Roshan Chinchpure ,<br />
        cinecapturestudio75@gmail.com,
        <br />
        8567828384
      </address>
      <h6 className="text-light overflow-y-hidden text-center">
        <i className="fa-solid fa-copyright"></i> All Rights Reserved Roshan
        Chinchpure Photopgraphy
      </h6>
      <h6 className="text-light overflow-y-hidden text-center">
        Site Developed By Addy modhave, <br />
        Asgardian labs Singapore
      </h6>
    </div>
  );
};
