import React from "react";
import { images } from "../constants";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function SMM() {
  const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px",top:'90px', cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px",top:'90px', right: "30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
  return (
    <>
      <section className="bg-darkblue w-full pt-14 mt-16">
      <h1 className="text-xl text-white mb-0 mt-10 text-center">Почему нужно использовать таргетированную рекламу в Facebook и Instagram?​</h1>
      <div className="flex justify-around align-center md:h-[302px] mt-4 ss:hidden sm:flex">
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.earth} className="w-full h-full" alt="award"/>
          <p className="text-white text-sm mt-1">Мировые социальные сети, распространенные в большинстве стран.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.people} className="w-full h-full" alt="like"/>
          <p className="text-white text-sm mt-1">Большой охват целевой аудитории.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.wallet} className="w-full h-full" alt="euro"/>
          <p className="text-white text-sm mt-1">Прогрессивная аудитория с высокой платежеспособностью.</p>
        </div>
        <div className="w-[20%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.stonks} className="w-full h-full" alt="euro"/>
          <p className="text-white text-sm mt-1">Лучшие алгоритмы оптимизации рекламы.</p>
        </div>
      </div>
      {/* carousel */}
      <div className="ml-4 ss:block sm:hidden w-full">

<Zoom {...zoomInProperties}>
      <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
      <Image src={images.earth} className="w-full h-full" alt="award"/>
    <p className="text-white text-sm mt-1">Мировые социальные сети, распространенные в большинстве стран.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.people} className="w-full h-full" alt="like"/>
    <p className="text-white text-sm mt-1">Большой охват целевой аудитории.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.wallet} className="w-full h-full" alt="euro"/>
    <p className="text-white text-sm mt-1">Прогрессивная аудитория с высокой платежеспособностью.</p>
  </div>
  <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
  <Image src={images.stonks} className="w-full h-full" alt="euro"/>
    <p className="text-white text-sm mt-1">Лучшие алгоритмы оптимизации рекламы.</p>
  </div>
</Zoom>
</div>
      </section>
    </>
  );
}
