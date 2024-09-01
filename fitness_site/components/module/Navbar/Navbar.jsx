"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="container">
      {/* start navbar */}
      <div className="navbar w-full flex justify-between items-center mt-[40px]">
        {/* logo */}
        <div className="logo_nav">
          <h1 className="text-[25px] font-bold">X.POWER</h1>
        </div>
        {/* menu */}
        <ul
          className={
            isOpen
              ? "menu flex gap-[27px] items-center flex-1 justify-start mr-5"
              : "menu flex gap-[27px] items-center flex-1 justify-start mr-5 max-[768px]:hidden"
          }
        >
          <li>
            <Link href="/" className="menu_link active">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href="/" className="menu_link">
              فروشگاه
            </Link>
          </li>
          <li>
            <Link href="/" className="menu_link">
              خدمات
            </Link>
          </li>
          <li>
            <Link href="/" className="menu_link">
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/" className="menu_link">
              محصولات
            </Link>
          </li>
        </ul>
        {/* toggle menu */}
        <div className="toggle-menu text-[#fff] text-[25px]  flex-1 mr-5 mt-[-7px] hidden max-[768px]:flex">
          <div className="cursor-pointer" onClick={() => setIsopen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBarsStaggered />}
          </div>
        </div>
        {/* login */}
        <div className="login_nav">
          <Link href="/" className="link_login bg-[#6f4efd] p-3 cursor-pointer rounded-[7px]">ورود / ثبت نام</Link>
        </div>
      </div>
      {/* end navbar */}
    </div>
  );
};

export default Navbar;
