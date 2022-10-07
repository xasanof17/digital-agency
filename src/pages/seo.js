import React from "react";
import Image from "next/image";
import { images } from "../constants";
import Accordion from "../components/accordion/Accordion";

export default function Seo() {
  
  return (
    <>
      <header className="w-full header bg-[url('../assets/img/seo-background.png')] md:h-[416px] ss:h-[260px] pt-[70px]">
        <h1 className="text-white text-xxl md:text-xxl sm:text-xl ss:text-xl md:w-[350px] ss:w-[210px] sm:w-[370px] ml-40 sm:ml-20 ss:ml-8">Оптимизация сайта SEO</h1>
        <p className="text-white text-base md:w-[560px] ss:w-[290px] sm:w-[560px] ml-40 sm:ml-20 ss:ml-8">Превращение текстового наполнения сайта в мощный маркетинговый инструмент</p>
      </header>
      {/* SEO optimization 1-section */}
      <section className="w-full bg-[url('../assets/img/footer-background.png')] flex justify-center items-center pt-[80px] pl-16 pr-16 ss:flex-col md:flex-row sm:flex-row h-[554px] sm:box-border sm:overflow-y-scroll md:overflow-hidden sm:overflow-hidden">
        <div className="w-full h-full">
        <Image src={images.seo_optimization} alt="seo optimization" />
        </div>
        <div className="flex flex-col md:w-[462px] lg:w-[680px] sm:w-[462px] ss:w-[288px] pb-10">
          <h1 className="text-bluedepths text-lg">Поисковая оптимизация. Что мы предлагаем?</h1>
          <p className="text-bluedepths text-sm my-10">Мы проводим работы по оптимизации Вашего сайта для его выхода на лидирующие позиции в результатах выдачи Google, Yandex или других поисковых системах по релевантным ключевым запросам.
          Говоря коммерческим языком, главной целью поисковой оптимизации (SEO) является увеличение органической посещаемости сайта для конвертирования посетителей в новые заказы, заявки, звонки.
          </p>
          <p className="bg-[#FBF7F1] rounded text-bluedepths text-sm">Мы используем максимально прозрачный подход в работе по SEO. В следующем блоке мы детально описываем поэтапные шаги по оптимизации Вашего сайта.</p>
        </div>
      </section>
      {/* How we work 2-section */}
      <section className="w-full">
        <h1 className="text-xl mb-0 mt-10 text-center">Как мы работаем?​</h1>
        <Accordion/>
      </section>
    
    </>
  );
}
