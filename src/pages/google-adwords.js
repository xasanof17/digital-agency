import Head from "next/head";
import React from "react";
import Image from "next/image";
import { images } from "../constants";
import { WhoSee, WhatIsAd, StepWork, WhatWin  } from "../components";

export default function GoogleAdwords() {
  return (
    <>
      <Head>
        <title>Google Adwords</title>
      </Head>
      Google Adwords
      <WhoSee />
      <WhatIsAd />
      <StepWork />
      <WhatWin />
    </>
  );
}
