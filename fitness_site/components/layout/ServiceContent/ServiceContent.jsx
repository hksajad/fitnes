import React from "react";
import "./ServicesContent.css";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const ServiceContent = () => {
  return (
    <div className="container">
      <div className="item_service flex justify-center items-center flex-wrap">
        <div className="boxes_content flex flex-col justify-center items-center">
          <div className="img_service">
            <Image src="/img/service1.png" width={50} height={50} />
          </div>
          <div className="txt_service text-center pt-7">
            <h2>برنامه تمرینی</h2>
            <p className="pt-7">
              ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح
              ورزشی
            </p>
          </div>
          <div className="link_service flex items-center gap-1 mt-10">
            <Link href="/">ادامه مطلب</Link>
            <GoArrowLeft className="text-[#fff]" />
          </div>
        </div>
        <div className="boxes_content active flex flex-col justify-center items-center">
          <div className="img_service">
            <Image src="/img/service2.png" width={50} height={50} />
          </div>
          <div className="txt_service text-center pt-7">
            <h2>مکمل های بدنسازی</h2>
            <p className="pt-7">
              بررسی انواع مکملهای بدنسازی برای انتخاب بهترین مکمل بدنسازی
            </p>
          </div>
          <div className="link_service flex items-center gap-1 mt-10">
            <Link href="/">ادامه مطلب</Link>
            <GoArrowLeft className="text-[#fff]" />
          </div>
        </div>
        <div className="boxes_content  flex flex-col justify-center items-center">
          <div className="img_service">
            <Image src="/img/service3.png" width={50} height={50} />
          </div>
          <div className="txt_service text-center pt-7">
            <h2>رژیم غذایی</h2>
            <p className="pt-7">
              ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار
              سلامتی هستند
            </p>
          </div>
          <div className="link_service flex items-center gap-1 mt-10">
            <Link href="/">ادامه مطلب</Link>
            <GoArrowLeft className="text-[#fff]" />
          </div>
        </div>
        <div className="boxes_content  flex flex-col justify-center items-center">
          <div className="img_service">
            <Image src="/img/service4.png" width={50} height={50} />
          </div>
          <div className="txt_service text-center pt-7">
            <h2>برنامه تمرینی</h2>
            <p className="pt-7">
              ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح
              ورزشی
            </p>
          </div>
          <div className="link_service flex items-center gap-1 mt-10">
            <Link href="/">ادامه مطلب</Link>
            <GoArrowLeft className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
