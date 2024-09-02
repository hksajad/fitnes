import ServiceContent from "@/components/layout/ServiceContent/ServiceContent";
import React from "react";

const Service = () => {
  return (
    <div className="container-fluid">
      <div className="servicePage w-full mt-20 bg-[#060b25] pt-20 ">
        <div className="titlePage">
            <h4>خدمات ما</h4>
            <h1>ما در ایکس پاور چه خدماتی ارائه میکنیم؟ </h1>
        </div>
        <div className="content_service w-full mt-16">
            <ServiceContent/>
        </div>
      </div>
    </div>
  );
};

export default Service;
