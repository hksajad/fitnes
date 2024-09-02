import React from "react";
import "./Hero.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="container">
      <div className="HeroPage  w-full ">
        <div className="content_hero flex justify-between items-center flex-row-reverse">
          {/* img hero */}
          <div className="img_hero m-[-25px]">
            <img src="/img/hero_img.png" alt="" className="w-[600px]" />
          </div>
          {/* caption hero */}
          <div className="caption_hero flex flex-col">
            <h1 className="text-[50px] font-extrabold	max-[768px]:text-[37px] max-[768px]:text-center">
              هر آنچه برای رسیدن به اندام
              <br /> ایده آل نیاز دارید
            </h1>
            <p className="text-[22px] font-normal	max-[768px]:text-[22px] max-[768px]:text-center">
              تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
            </p>
            <div className="w-[495px] leading-[30px] bg-[#ffffff36]  rounded-[7px] mt-[40px] text-justify p-8 max-[768px]:w-[320px] max-[768px]:m-auto max-[768px]:mt-10">
              <div className="Award flex justify-center items-center">
                <img src="/img/Award.png" className="w-[40px]" />
              </div>
              <span className="font-normal text-[20px] ">
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </span>
            </div>
          </div>
        </div>
        {/* bg hero content */}
        <div className="bg_hero-content flex justify-center items-center">
          <span>همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
