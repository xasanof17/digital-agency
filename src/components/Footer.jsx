import React,{useRef} from "react";
import Image from "next/image";
import {images} from '../constants'
import emailjs from 'emailjs-com'

function Footer() {
  const form = useRef();
  function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm('service_v4cb4oa', 'template_y1312jb', form.current, 'PQ-VksmVP8UIV5yCL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}
  return (
    <footer className="w-full bg-[url('../assets/img/footer-background.png')] md:h-[874px] sm:h-[763px] ss:h-[1368px] pt-[80px] ">
      <div className="footer-brand lg:ml-[170px] sm:ml-[50px] md:ml-[30px] ss:absolute ss:top-96 sm:static md:static lg:static ">
      <Image src={images.darklogo} alt="logo"/>
      </div>
      <div className="flex justify-center">
      <div className="contacts flex flex-wrap flex-row-reverse">
      <div className="contacts_letter lg:w-[500px] lg:h-[600px] md:w-[462px] md:h-[600px] sm:w-[350px] sm:h-[610px] bg-blue mt-[-45px] p-[20px] ss:w-[320px] rounded">
          <h1 className="text-white text-xl mt-8 ml-6">Есть вопросы? </h1>
          <p className="text-white text-base mt-6 ml-6">Свяжитесь с нами</p>
          <form class="px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
    <div class="mb-4">
      <input class="bg-blue shadow appearance-none border border-seadrive rounded w-full py-2 px-3 text-seadrive leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Имя"/>
    </div>
    <div class="mb-4">
      <input class="bg-blue shadow appearance-none border border-seadrive rounded w-full py-2 px-3 text-seadrive mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Email"/>
    </div>
    <div class="mb-4">
      <input class="bg-blue shadow appearance-none border border-seadrive rounded w-full py-2 px-3 text-seadrive mb-3 leading-tight focus:outline-none focus:shadow-outline" name="number" type="number" placeholder="+7  999 999-99-99"/>
    </div>
    <div className="mb-6">
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-seadrive bg-blue rounded-lg border border-seadrive focus:ring-blue-500 focus:border-blue-500" name="message" placeholder="Ваше сообщение"></textarea>
    </div>
    <div class="flex items-center ">
      <button class="bg-white hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send Message">
      Отправить 
      </button>
      <input id="default-checkbox" type="checkbox" class="ml-6 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
      <label for="default-checkbox" class="ml-2 text-sm text-white">Я прочитал и принимаю условия 
                                                                      пользовательского соглашения </label>
    </div>
  </form>
        </div>
        <div className="contacts_items ss:mt-20 sm:mt-0 md:mt-0 lg:mt-0">
          <div className="number mt-4">
            <p className="text-seadrive text-sm">Телефон</p>
            <div className="flex sm:flex-col md:flex-row ss:flex-col">
            <a className="mr-8 text-blue text-base sm:mt-4" href="tel:+001 987-654-3210">+001 987-654-3210</a>
            <a className="text-blue text-base sm:mt-4 ss:mt-4" href="tel:+001 987-654-3210">+001 987-654-3210</a>
            </div>
          </div>
          <div className="infos flex my-14 sm:flex-col md:flex-row ss:flex-col">
            <div className="email mr-8">
              <p className="text-seadrive">Email</p>
              <a className="text-blue text-base" href="info@example.com">info@example.com</a>
            </div>
            <div className="address sm:mt-6 md:mt-0">
              <p className="text-seadrive">Адрес</p>
              <p className="text-bluedepths text-base md:w-[320px] sm:w-[334px]">123/B, Route 66, Downtown, Washington, DC 20004, US​
</p>
            </div>
          </div>
          <div className="contact_iframe">
          <iframe className="md:w-[500px] md:h-[299px] sm:h-[180px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95848.37848888354!2d69.271552!3d41.3466624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef7e2f1d90e45%3A0x24e3caaa0efb6eb!2z0JDRjdGA0L7Qv9C-0YDRgg!5e0!3m2!1sru!2s!4v1665053202508!5m2!1sru!2s" ></iframe></div>
        </div>
        
      </div>

      </div>
    </footer>
  );
}
export default Footer;
