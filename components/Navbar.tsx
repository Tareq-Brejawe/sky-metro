"use client";

import { Img1, Logo1, Logo2 } from "@/images";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
import { HiMiniChevronDown } from "react-icons/hi2";
import { VscCloseCompact, VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTab, setOpenTab] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const toggleLanguage = () => {
    // If current language is English, switch to Arabic, and vice versa
    const nextLocale = locale === "en" ? "ar" : "en";

    const nextPathname = pathname.replace(/^\/(en|ar)/, "") || "/";
    router.replace(`/${nextLocale}${nextPathname}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      role="menubar"
      className={`flex items-center py-0.5 ${isScrolled ? "bg-white! text-[#5687af] shadow" : "bg-transparent text-white"} z-100 fixed w-full justify-between xl:px-20 px-6`}
    >
      <Link role="logo" href="/" className="flex items-center py-2 2xl:py-0">
        {isScrolled ? (
          <Image
            id="Logo2"
            aria-label="Logo2"
            role="img"
            src={Logo2}
            alt="Sky metro"
            className="w-12"
          />
        ) : (
          <Image
            id="Logo1"
            aria-label="Logo1"
            role="img"
            src={Logo1}
            alt="Sky metro"
            className="w-12"
          />
        )}

        {locale === "ar" ? (
          <h1
            className={`text-xl pr-2 hidden md:block text-shadow-sm font-black italic ${isScrolled ? "text-[#5687af]" : "text-white"}`}
          >
            سكاي ميترو
          </h1>
        ) : (
          <h1
            className={`text-xl hidden md:block text-shadow-sm font-black italic ${isScrolled ? "text-[#5687af]" : "text-white"}`}
          >
            Sky Metro
          </h1>
        )}
      </Link>
      {/* menu for large screen */}
      <div role="menu" className="hidden xl:block">
        <ul
          role="list"
          className={`flex items-center gap-x-10 ${isScrolled ? "text-[#5687af]" : "text-white"}`}
        >
          <Link
            id="link Home"
            aria-label="Home"
            role="link"
            href="/"
            className="cursor-pointer"
          >
            {t("Home")}
          </Link>
          <Link
            id="link Services"
            aria-label="Services"
            role="link"
            href="#services"
            onMouseEnter={() => {
              setHover((prev) => !prev);
            }}
            onMouseLeave={() => {
              setHover((prev) => !prev);
            }}
          >
            <span className="cursor-pointer py-6 flex items-center gap-x-1">
              {t("Services")} <HiMiniChevronDown size={17} />
            </span>
            <div
              className={`absolute font-bold w-screen ${hover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"} ease-out transition duration-200 left-0 pl-20 shadow bg-white text-black/85 flex justify-between items-center gap-y-4`}
            >
              <div className="flex w-full gap-x-20 pr-10">
                <div>
                  <h1 className="font-black">{t("Fiber internet")}</h1>
                  <ul
                    role="list"
                    className="text-black/60 text-[15px] flex flex-col gap-2 mt-2"
                  >
                    <h1 className="text-[#5687af]">{t("Postpaid packages")}</h1>
                    <ul className="flex flex-col gap-2">
                      <li className="cursor-pointer hover:underline  underline-offset-6">
                        {t("postpaid 100")}{" "}
                      </li>
                      <li className="cursor-pointer hover:underline  underline-offset-6">
                        {t("postpaid 200")}{" "}
                      </li>
                      <li className="cursor-pointer hover:underline  underline-offset-6">
                        {t("postpaid 300")}{" "}
                      </li>
                    </ul>
                    <h1 className="text-[#5687af]">{t("Prepaid packages")}</h1>
                    <li className="cursor-pointer hover:underline  underline-offset-6">
                      {t("Fiber prepaid")}{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-black">{t("Fixed wireless")}</h1>
                  <ul
                    role="list"
                    className="text-black/60 text-[15px] flex flex-wrap gap-x-20 gap-y-2 mt-2"
                  >
                    <div>
                      <h1 className="text-[#5687af]">
                        {t("Postpaid packages")}
                      </h1>
                      <ul className="mt-2 flex flex-col gap-2">
                        <li className="cursor-pointer hover:underline  underline-offset-6">
                          {t("100 Mbps")}{" "}
                        </li>
                        <li className="cursor-pointer hover:underline  underline-offset-6">
                          {t("200 Mbps")}{" "}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-[#5687af]">
                        {t("Prepaid packages")}
                      </h1>
                      <div className="flex gap-10 mt-2">
                        <ul className="flex flex-col gap-2">
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("3 Months")}
                          </li>
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("6 Months")}
                          </li>
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("12 Months")}
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("4G for 3")}
                          </li>
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("4G for 6")}
                          </li>
                          <li className="cursor-pointer hover:underline   underline-offset-6">
                            {t("4G for 12")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <Image role="img" className="w-lg" src={Img1} alt="Sky metro" />
            </div>
          </Link>
          <Link
            id="link pricing"
            aria-label="pricing"
            role="link"
            href="#pricing"
            className="cursor-pointer"
          >
            {t("Pricing")}
          </Link>
          <Link
            id="link contact"
            aria-label="contact"
            role="link"
            href="/contact"
            className="cursor-pointer"
          >
            {t("Contact")}
          </Link>
        </ul>
      </div>
      {/* menu for small screen */}
      {open && (
        <div
          role="menu"
          className="flex flex-col xl:hidden absolute top-18 z-100 bg-white justify-between h-[calc(100vh-4rem)] w-full left-0 text-black"
        >
          <ul role="list" className="flex flex-col items-start gap-x-10 ">
            <Link
              id="link Home"
              aria-label="Home"
              role="link"
              href="/"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="cursor-pointer w-full border-b border-b-gray-200 px-6 py-4"
            >
              {t("Home")}
            </Link>
            <li
              className="w-full border-b border-b-gray-200 px-6 py-4"
              onClick={() => {
                setOpenTab((prev) => !prev);
              }}
            >
              <span className="cursor-pointer flex justify-between w-full items-center gap-x-1">
                {t("Services")} <HiMiniChevronDown size={17} />
              </span>
              <div
                className={`font-bold ${openTab ? "block" : "hidden"} w-full mt-4 text-sm left-0 bg-white text-black/85 flex flex-col justify-between items-center gap-y-4`}
              >
                <div className="flex flex-wrap gap-x-10 gap-y-4 w-full">
                  <div>
                    <h1 className="font-black">{t("Fiber internet")}</h1>
                    <ul
                      role="list"
                      className="text-black/60 text-sm flex flex-col gap-2 mt-2"
                    >
                      <h1 className="text-[#5687af]">
                        {t("Postpaid packages")}
                      </h1>
                      <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer hover:underline underline-offset-6">
                          {t("postpaid 100")}{" "}
                        </li>
                        <li className="cursor-pointer hover:underline underline-offset-6">
                          {t("postpaid 200")}{" "}
                        </li>
                        <li className="cursor-pointer hover:underline underline-offset-6">
                          {t("postpaid 300")}{" "}
                        </li>
                      </ul>
                      <h1 className="text-[#5687af] ">
                        {t("Prepaid packages")}
                      </h1>
                      <li className="cursor-pointer hover:underline underline-offset-6">
                        {t("Fiber prepaid")}{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="font-black ">{t("Fixed wireless")}</h1>
                    <ul
                      role="list"
                      className="text-black/60 text-[15px] flex flex-wrap gap-x-20 gap-y-2 mt-2"
                    >
                      <div className="text-sm">
                        <h1 className="text-[#5687af]">
                          {t("Postpaid packages")}
                        </h1>
                        <ul className="mt-2 flex flex-col gap-2">
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("100 Mbps")}{" "}
                          </li>
                          <li className="cursor-pointer hover:underline  underline-offset-6">
                            {t("200 Mbps")}{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <h1 className="text-[#5687af]">
                          {t("Prepaid packages")}
                        </h1>
                        <div className="flex gap-10 mt-2">
                          <ul className="flex flex-col gap-2">
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("3 Months")}
                            </li>
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("6 Months")}
                            </li>
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("12 Months")}
                            </li>
                          </ul>
                          <ul className="flex flex-col gap-2">
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("4G for 3")}{" "}
                            </li>
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("4G for 6")}
                            </li>
                            <li className="cursor-pointer hover:underline underline-offset-6">
                              {t("4G for 12")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <Link
              id="link pricing"
              aria-label="pricing"
              role="link"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              href="#pricing"
              className="cursor-pointer w-full border-b border-b-gray-200 px-6 py-4"
            >
              {t("Pricing")}
            </Link>
            <Link
              id="link contact"
              aria-label="contact"
              role="link"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              href="/contact"
              className="cursor-pointer w-full border-b border-b-gray-200 px-6 py-4"
            >
              {t("Contact")}
            </Link>
            <div className="w-full px-6">
              {locale === "ar" ? (
                <button
                  id="button"
                  aria-label="تفعيل"
                  role="button"
                  className="w-full bg-[#5687af] px-2 pb-2 pt-3 mt-4 cursor-pointer text-white"
                >
                  تفعيل
                </button>
              ) : (
                <button
                  id="button"
                  aria-label="Activate"
                  role="button"
                  className="w-full bg-[#5687af] font-black px-2 pb-2 pt-3 mt-4 cursor-pointer text-white"
                >
                  Activate
                </button>
              )}
            </div>
          </ul>
          <div className="flex w-full justify-center gap-x-6 pb-10">
            <FaFacebook size={27} className="text-blue-500 cursor-pointer" />
            <FaTelegram size={27} className="text-blue-400 cursor-pointer" />
            <FaTiktok size={25} className="cursor-pointer" />
            <FaInstagram size={27} className="text-pink-500 cursor-pointer" />
          </div>
        </div>
      )}

      <div className="flex text-white  items-center leading-none gap-x-5 xl:gap-x-10">
        {locale === "ar" ? (
          <button
            id="switch"
            aria-label="En"
            role="button"
            onClick={toggleLanguage}
            className={`${isScrolled ? "border-[#5687af] bg-white  text-[#5687af] hover:bg-[#5687af] hover:text-white" : "border-white hover:bg-white hover:text-[#5687af]"} border px-2 pt-2 pb-1 cursor-pointer font-bold transition duration-150 ease-out`}
          >
            En
          </button>
        ) : (
          <button
            id="switch"
            aria-label="Ar"
            role="button"
            onClick={toggleLanguage}
            className={`${isScrolled ? "border-[#5687af] bg-white text-[#5687af] hover:bg-[#5687af] hover:text-white" : "border-white hover:bg-white hover:text-[#5687af]"} border px-2 pt-2 pb-1 cursor-pointer font-bold transition duration-150 ease-out`}
          >
            Ar
          </button>
        )}
        {locale === "ar" ? (
          <button
            role="button"
            className={`${isScrolled ? "text-white bg-[#5687af] border-[#5687af]" : "text-[#5687af] bg-white border-white"} hidden xl:block border  px-2 pt-2 pb-1 cursor-pointer`}
          >
            تفعيل
          </button>
        ) : (
          <button
            role="button"
            className={`${isScrolled ? "text-white bg-[#5687af] border-[#5687af]" : "text-[#5687af] bg-white border-white"} font-bold hidden xl:block border  px-2 pt-2 pb-1 cursor-pointer`}
          >
            Activate
          </button>
        )}

        {open ? (
          <button
            id="close"
            aria-label="icon"
            role="button"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className={`block xl:hidden ${isScrolled ? "text-[#5687af] border-[#5687af]" : "text-white border-white"} border px-2 pt-2 pb-1 cursor-pointer`}
          >
            <VscCloseCompact strokeWidth={1} />
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className={`block xl:hidden ${isScrolled ? "text-[#5687af] border-[#5687af]" : "text-white border-white"} border px-2 pt-2 pb-1 cursor-pointer`}
          >
            <VscThreeBars strokeWidth={1} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
