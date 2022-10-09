<<<<<<< HEAD
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
=======
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <header className="w-full header bg-[url('../assets/img/main-page-background.png')] md:h-[706px] ss:h-[652px] pt-[70px]">
    <div className="flex flex-col">
    <h3 className="text-white md:text-xl sm:text-lg ss:text-xl lg:w-[679px] md:w-[462px] ss:w-[288px] sm:w-[334px] ml-40 sm:ml-20 ss:ml-8">Мы помогаем малому бизнесу стартовать и меняться</h3>
        <h1 className="text-white md:text-xxl sm:text-xl ss:text-xl lg:w-[679px] md:w-[462px] ss:w-[288px] sm:w-[334px] ml-40 sm:ml-20 ss:ml-8 my-16">Digital агентство ORA</h1>
        <p className="text-white text-base lg:w-[679px] md:w-[462px] ss:w-[290px] sm:w-[334px] ml-40 sm:ml-20 ss:ml-8">Объединяем ваш отраслевой опыт и нашу digital-экспертизу для достижения результатов</p>
    </div>
       </header>
    </>
  );
}
>>>>>>> 5b2c9b28ccd0742cb4c6b57ba217b13e04edcb10
