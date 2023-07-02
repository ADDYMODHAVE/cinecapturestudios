import React from "react";
import classes from "./HomePageGallery.module.css";
import { Context } from "@/Store/Context";
import { contexttype } from "@/common/contexttype";
import Link from "next/link";
import { useEffect } from "react";
import Loadingspinner from "@/common/Loading";

type image = {
  link: string;
  id: string;
};
let loadfirsttime = true;

const ImageAdd = (props: image) => {
  return (
    <Link href="/gallery" className="overflow-hidden">
      <img src={props.link} alt="pic" />
    </Link>
  );
};

export const HomePageGallery = () => {
  const Data: contexttype = React.useContext<any>(Context);
  const UpdatedImage = Data.AvilableImage.slice(0, 16).map((data: any) => {
    return <ImageAdd link={data.link} id={data.id} key={data.id} />;
  });
  React.useEffect(() => {
    setTimeout(() => {
      loadfirsttime = false;
    }, 500);
  }, []);

  return (
    <>
      {loadfirsttime ? (
        <Loadingspinner />
      ) : (
        <div className={classes.frontpagemain}>{UpdatedImage}</div>
      )}
    </>
  );
};
