import React from "react";
import classes from "./GalleryPhotoViewer.module.css";

type proptype = {
  oncloseImage: any;
  ImageLink: {
    link: string;
    id: string;
  };
  OnSelectButtonDisabled: any;
};

export const GalleryPhotoViwer = (props: proptype) => {
  const [UserLikedPic, SetLikedPic] = React.useState(false);

  const LikeHandler = () => {
    SetLikedPic(!UserLikedPic);
  };

  const CloseImageViwer = () => {
    props.oncloseImage();
    props.OnSelectButtonDisabled();
  };

  return (
    <>
      <div
        className={`${classes.galleryPhotoPosition} d-flex flex-column`}
        style={{ background: "rgb(0,0,0,0.6)" }}
      >
        <div style={{ background: "rgb(0,0,0,0.6)" }} className="d-flex">
          <div className="ms-auto" style={{ background: "black" }}>
            <button
              type="button"
              className="btn btn-danger m-2"
              onClick={CloseImageViwer}
            >
              X
            </button>
          </div>
        </div>
        <div
          className="d-flex flex-cloumn justify-content-center "
          style={{ background: "rgb(0,0,0,0.6)" }}
        >
          <div className="w-75">
            <img
              src={props.ImageLink.link}
              className="img-fluid rounded"
              alt="image"
            />
          </div>
        </div>
        <div
          className="d-flex  text-light m-1 align-items-center"
          style={{ background: "rgb(0,0,0,0.6)" }}
        >
          <div className=" m-auto my-2 overflow-hidden" onClick={LikeHandler}>
            <i
              className={`fa-sharp fa-solid fa-heart fs-3 text-${
                UserLikedPic ? `danger` : "light"
              }`}
            ></i>
          </div>

          <span className="m-auto my-2">
            <i className="fa-solid fa-thumbs-up fs-5 me-3"></i>
            {Math.floor(Math.random() * 11)}
          </span>
        </div>
      </div>
    </>
  );
};
