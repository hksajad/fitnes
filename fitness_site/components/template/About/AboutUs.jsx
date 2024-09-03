import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
const AboutUs = () => {
  return (
    <div className="container-fluid w-full bg-[#060b25]">
      <div className="container">
        <div className="about pt-15  w-full flex flex-row-reverse items-center justify-between" id="about">
          {/* img about */}
          <div className="image_about">
            <Image
              src="/img/img-about.png"
              width={500}
              height={500}
              className=" img w-[560px]"
            />
          </div>
          {/* caption about */}
          <div className="caption_about flex flex-col">
            <h1 className="text-[40px] w-[480px] font-extrabold	">
              برنامه تمرینی کاملا اختصاصی برای شما...
            </h1>
            <p className="font-normal text-[20px] leading-[30px] w-[630px] text-justify pt-3">
              هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ
              تناسب اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام
              بدن ، با ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون
              دریافت خواهید کرد.
            </p>
            <div className="link_about flex items-center gap-5 mt-8">
              <Link href="/" className="bg-[#6f4efd] px-3 py-3 rounded-[7px]">دریافت برنامه تمرینی</Link>
              <Link href="/">مشاهده نظر کاربران</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
