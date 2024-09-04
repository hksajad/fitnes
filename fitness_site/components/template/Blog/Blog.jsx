import Link from 'next/link'
import React from 'react'

const Blog = () => {
    const datablog=[
        {id:1,img:'/img/blog1.png',title:"پولدارترین بدنسازهای تاریخ" , caption:"صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند..." , link:"ادامه مطلب"},
        {id:2,img:'/img/blog2.png',title:"چقدر مقدار وزنه انتخاب کنم؟" , caption:"صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید." , link:"ادامه مطلب"},
        {id:3,img:'/img/blog3.png',title:"برنامه تمرینی اینتروال چربی سوزی" , caption:"تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر..." , link:"ادامه مطلب"}
    ]
  return (
    <div className='container-fluid w-full bg-[#060b25]'>
        <div className="container">
            <div className="titlePage mt-20">
                <h4>مقالات</h4>
                <h1>جدیدترین مقالات</h1>
            </div>
            <div className="content_blog w-full mt-10 flex justify-center items-center flex-wrap ">
                {datablog.map((index) =>(
                    <div className='items_blog flex flex-col mx-5 my-5 bg-[#ffffff36] rounded-[15px]'>
                        <div className="img-blog">
                            <img src={index.img} alt="" className='w-[320px]'/>
                        </div>
                        <div className="title-blog text-right text-[#fff] mt-3 text-[20px] font-bold p-3">{index.title}</div>
                        <div className="caption-blog text-justify text-[#fff] mt-1 text-[13px] p-3 font-bold w-[300px] leading-[30px]">{index.caption}</div>
                        <Link href="/" className='p-3 bg-[#6f4efd] text-center'>{index.link}</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog