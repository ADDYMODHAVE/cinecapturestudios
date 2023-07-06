import { FrontPageCrowsel } from "@/Components/HomePage/FrontPageCrowsel";
import { HomePageGallery } from "@/Components/HomePage/HomePageGallery";
import { PriceCard } from "@/Components/HomePage/PriceCard";
import VideoPlayer from "@/Components/Util/Videoplayer";
import Loadingspinner from "@/common/Loading";
import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>cinecapturestudio</title>
        <meta
          name="description"
          content={`Hello My name is ROSHAN CHINCHPURE.Best photographer in pune manchar.`}
        />
        <meta
          name="keywords"
          content={`wedding,manchar wedding photographer,pune wedding photographer,cinecapturestudio,cheap photographer,outdoor shoot,roshan chinchpure photography,roshan chinchpure,engagement shoot, baby shoot,prewedding,india photographer,photographer india,photographer in pune`}
        />
        <meta name="author" content="Roshan Chinchpure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="format-detection" content="telephone=8567828384" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="Expert photography,webneel.com" />
        <meta property="og:title" content="cinecapturestudio" />
        <meta
          property="og:description"
          content="Hello My name is ROSHAN CHINCHPURE.Best photographer in pune manchar."
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/564x/d7/49/86/d749863520cb181c1e38c9977451775f.jpg"
        />
        <meta name="twitter:title" content="cinecapturestudio" />
        <meta
          name="twitter:description"
          content="Hello My name is ROSHAN CHINCHPURE.Best photographer in pune manchar."
        />
        <meta
          name="twitter:image"
          content="https://i.pinimg.com/564x/d7/49/86/d749863520cb181c1e38c9977451775f.jpg"
        />
      </Head>
      <main>
        <FrontPageCrowsel />
        <HomePageGallery />
        <VideoPlayer />
        <PriceCard />
      </main>
    </>
  );
}
