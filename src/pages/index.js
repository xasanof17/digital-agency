import React from "react";
import Head from "next/head";
import { Reklama, Uslugi, Form } from "../components";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Digital Agency</title>
      </Head>
      <h1 className="font-bold underline">Digital Agency</h1>
      {/* <Reklama/> */}
      {/* <Uslugi/> */}
      <div className="container">
        <Form title="Свяжитесь с нами" text='slom' />
      </div>
    </div>
  );
}
