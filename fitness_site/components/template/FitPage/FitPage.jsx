import Link from "next/link";
import React from "react";
import { FaMedal } from "react-icons/fa6";
const FitPage = () => {
    const itemsFit=[
        {id:1 , number:1 , title:"ثبت نام" , caption:"تکمیل مدارک و ارسال"},
        {id:2 , number:2 , title:"انتخاب مربی" , caption:"تکمیل مدارک و ارسال"},
        {id:3 , number:3 , title:"دریافت برنامه" , caption:"تکمیل مدارک و ارسال"},
    ]
  return (
    <div className="container-fluid w-full bg-[#060b25]">
      <div className="container">
        <div className="fit flex flex-col  w-full">
          <div className="title_fit flex gap-3 items-center">
            <h1 className="text-[30px]">
              مسیر <span className="text-[#6f4efd]">فیت شدن</span>
            </h1>
            <FaMedal className="text-[#6f4efd] text-[30px]" />
          </div>
          <div className="caption_fit flex justify-between items-center mt-3 max-[768px]:flex-col">
            <p className="text-[18px]">
              از همین حالا همت کن و با خودت بگو دیگه وقتشه
            </p>
            <Link href="/" className="bg-[#6f4efd] px-3 py-3 rounded-[7px] max-[768px]:mt-4">
              امروز شروع کن
            </Link>
          </div>
          <div className="content_fit flex justify-between items-center mt-5">
            <div className="box_fit flex flex-wrap">
                {
                    itemsFit.map((index) =>(
                        <div className="item bg-[#6f4efd] rounded-[7px] w-[200px] m-5 p-8">
                            <div className="number bg-[#060b25] flex justify-center items-center w-[60px] h-[60px] rounded-[100%] text-[#fff]" id={index.id}>{index.number}</div>
                            <div className="title text-[#fff] mt-5 text-[20px]" id={index.id}>{index.title}</div>
                            <div className="caption text-[#fff] mt-3" id={index.id}>{index.caption}</div>
                        </div>
                    ))
                    
                }
            </div>
            <p className="w-[320px] text-[#fff] text-justify leading-8 text-[20px] max-[1200px]:w-[100%]">همه دوست دارن یک هیکل خوب داشته باشن، اما حاضر نیستن رنج و درد فیزیکی ساعت ها تمرین کردن تو باشگاه رو تحمل کنن</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitPage;
