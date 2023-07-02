import classes from "./SmallIntro.module.css";
import { AboutLogo } from "@/common/contexttype";

export const SmallIntro = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row justify-content-center align-items-center bg-dark rounded shadow m-2 "
        id="about"
      >
        <div className="overflow-x-visible">
          <img
            src={AboutLogo.abouturl}
            className="img fluid rounded-circle p-2 overflow-x-auto"
            style={{ width: "30rem", height: "30rem" }}
            alt="IMAGE"
          />
        </div>
        <div className={classes.firstletterCapital}>
          <p className="fs-5 m-3 text-white">
            {" "}
            Hello My name is{" "}
            <span className="text-info fw-bold">ROSHAN CHINCHPURE.</span> I am
            <span className="text-info fw-bold">
              {" "}
              Photographer & Cinematographer
            </span>{" "}
            . I have 8 years exprience and I am living In{" "}
            <span className="text-info fw-bold"> Pune</span> . Currently working
            as full time Photographer &{" "}
            <span className="text-info fw-bold">Cinematographer.</span> I am
            taking orders from all over{" "}
            <span className="text-info fw-bold">India.</span>.
          </p>
        </div>
      </div>
    </>
  );
};
