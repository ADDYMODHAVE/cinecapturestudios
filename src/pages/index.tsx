import { FrontPageCrowsel } from "@/Components/HomePage/FrontPageCrowsel";
import { HomePageGallery } from "@/Components/HomePage/HomePageGallery";
import { PriceCard } from "@/Components/HomePage/PriceCard";
import VideoPlayer from "@/Components/Util/Videoplayer";
import Loadingspinner from "@/common/Loading";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
      <FrontPageCrowsel />
      <HomePageGallery />
      <VideoPlayer />
      <PriceCard />
    </>
  );
}
