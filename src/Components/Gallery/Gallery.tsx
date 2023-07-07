import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import { GalleryPhotoViwer } from "../GalleryPhotoViwer/GalleryPhotoViwer";

type proptype = {
  link: string;
  id: string;
};

const AddDynamicCategory = (props: proptype) => {
  return (
    <>
      <img src={props.link} alt="dummy" />
    </>
  );
};

function Gallery(this: any) {
  const [category, SetIsCategory] = useState("wedding");
  const [CategoryWiseImager, SetCategoryWiseImage] = useState<any>([]);
  const [CloseImageViwer, SetIsImageViwer] = React.useState(false);
  const [SelectButtonClicked, SetSelect] = React.useState(false);
  const [ImageLink, SetImageLink] = React.useState<any>("");
  const Data: contexttype = React.useContext<any>(Context);

  const CategoryUpdate = (e: any) => {
    SetIsCategory(e.target.value);
    SetIsImageViwer(false);
  };

  const UpdateCategory = () => {
    const UpdatedImages = Data.AvilableImage.filter((data: any) => {
      console.log(category);
      return data.category === category;
    });
    SetCategoryWiseImage(UpdatedImages);
  };
  const ShowImageViwer = (link: any) => {
    SetImageLink(link);
    SetIsImageViwer(!CloseImageViwer);
    SetSelect(true);

  };

  const UpdatedImageList = CategoryWiseImager.map((data: any) => {
    return (
      <div
        className="overflow-hidden"
        onClick={ShowImageViwer.bind(this,{link:data.link,id:data.id})}
      >
        <AddDynamicCategory link={data.link} id={data.id} key={data.id} />
      </div>
    );
  });

  const OnSelectButtonHandler=()=>{
    SetSelect(false);
  }


  useEffect(() => {
    UpdateCategory();
  }, [category, Data]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <form>
          <select
            className="form-select text-center"
            name="category"
            onChange={CategoryUpdate}
            defaultValue={"wdding"}
            disabled={SelectButtonClicked}
          >
            <option value="wedding">wedding</option>
            <option value="prewedding">pre-wedding</option>
            <option value="maternity">maternity</option>
            <option value="engegment">Engegment Shoot</option>
            <option value="albumpage">Album Page</option>
            <option value="babyshoot">BABY SHOOT</option>
          </select>
        </form>
      </div>
      {CloseImageViwer && (
        <GalleryPhotoViwer
          oncloseImage={ShowImageViwer}
          ImageLink={ImageLink}
          OnSelectButtonDisabled={OnSelectButtonHandler}
        />
      )}
      <div className={classes["main-gallery"]}>{UpdatedImageList}</div>
    </>
  );
}

export default Gallery;
