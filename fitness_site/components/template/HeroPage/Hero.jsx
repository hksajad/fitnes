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
            <img src="/img/hero_img.png" alt="" className="w-[600px]"/>
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
            <span className="font-normal text-[20px] leading-[30px] bg-[#ffffff36] w-[495px] rounded-[7px] mt-[45px] text-justify p-8">
              با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم
              دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته ورزشی
              جذاب قرار دهیم.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
