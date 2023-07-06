import { SmallIntro } from "@/Components/Aboutuspage/SmallIntro";
import { Typewriter } from "@/Components/Aboutuspage/Typography";
import { SocialMediaLinks } from "@/Components/Aboutuspage/SocialMediaLinks";
import Head from "next/head";

export default function about() {
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
      <div className="mt-2">
        <Typewriter />
        <SmallIntro />
        <SocialMediaLinks />
      </div>
      </main>
    </>
  );
}
