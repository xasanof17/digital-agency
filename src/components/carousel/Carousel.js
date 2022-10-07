import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { images } from "../../constants";
import Image from "next/image";

const Carousel = () => {

	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px",top:'390px', cursor: "pointer" }}>
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
			<div style={{ width: "30px",top:'390px', right: "30px", cursor: "pointer" }}>
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
		<div className="ml-4 ss:block sm:hidden w-full">

			<Zoom {...zoomInProperties}>
            <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.award_icon} className="w-full h-full" alt="award"/>
          <h3 className="text-white text-base mt-4">Долгосрочный результат</h3>
          <p className="text-white text-sm mt-1">Пожалуй, самое главное - долгосрочность результатов. После того, как комплекс работ по поисковой оптимизации выведет ваш сайт на более высокие позиции выдачи поисковых систем, то можно с уверенностью сказать, что вы надолго останетесь там, при условии, что будете продолжать работу над поисковой оптимизацией, не забывая про другие эффективные методы продвижения. Помните, только комплекс продвижения будет приносить постоянные результаты.</p>
        </div>
        <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.like_icon} className="w-full h-full" alt="like"/>
          <h3 className="text-white text-base mt-4">Доверие людей</h3>
          <p className="text-white text-sm mt-1">Будем откровенны, люди больше доверяют органике, нежели рекламным сообщениям. На подсознательном уровне заложено то, что компании, которые появляются на первых 2-3 страницах выдачи Google, Yandex и др. являются неким эталоном надежности и бесопасны для клиента (клиенты определенно предполагают, что такая компания давно на рынке, определенно у нее большой и компетентный штат сотрудников и т.д.).</p>
        </div>
        <div className="w-[90%] border-t-[2px] border-blankstare mt-6 pt-4">
          <Image src={images.euro_icon} className="w-full h-full" alt="euro"/>
          <h3 className="text-white text-base mt-4">Низкая стоимость клиента ​</h3>
          <p className="text-white text-sm mt-1">Определенно, вы будете конкурировать с рекламными сообщениями в Google или Yandex. Но если ваш сайт находится на высоких позициях выдачи, то потенциальный клиент его с большей доли вероятности посетит, так как все изучают множество предложений перед покупкой. Находясь на высоких позициях вы можете получать клиента с более скромными бюджетами на рекламу или вообще не вкладываясь в рекламы (но этого делать мы искренне не советуем) нежели конкуренты.</p>
        </div>
			</Zoom>
		</div>
	);
};

export default Carousel;