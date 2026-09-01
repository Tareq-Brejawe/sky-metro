import { Logo2 } from "@/images";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("Footer");

  return (
    <section
      role="footer"
      className="flex flex-col items-center text-black/85 pt-10 md:pt-30 px-6 xl:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-4xl gap-10">
        <div className="flex flex-col gap-y-2  ">
          <div className="flex items-center">
            <Image src={Logo2} alt="Sky metro" className="w-13" />
            {locale === "ar" ? (
              <h1 className="text-xl pr-2 text-shadow-sm font-black italic text-[#5687af]">
                سكاي ميترو
              </h1>
            ) : (
              <h1 className="text-xl text-shadow-sm font-black italic text-[#5687af]">
                Sky Metro
              </h1>
            )}
          </div>
          <p className="text-sm text-gray-500">{t("The best")}</p>
          <div className="flex gap-x-4 mt-4">
            <FaFacebook size={24} className="text-blue-500 cursor-pointer" />
            <FaTelegram size={24} className="text-blue-400 cursor-pointer" />
            <FaTiktok size={22} className="cursor-pointer" />
            <FaInstagram size={24} className="text-pink-500 cursor-pointer" />
          </div>
        </div>
        <div>
          <h1>{t("Quick links")}</h1>
          <ul
            role="list"
            className="text-sm mt-2 flex flex-row flex-wrap md:flex-nowrap md:flex-col gap-2"
          >
            <Link className="hover:underline underline-offset-6" href="/">
              {t("home")}
            </Link>
            <Link
              className="hover:underline underline-offset-6"
              href="/Services"
            >
              {t("services")}
            </Link>
            <Link
              className="hover:underline underline-offset-6"
              href="/Pricing"
            >
              {t("pricing")}
            </Link>
            <Link
              className="hover:underline underline-offset-6"
              href="/contact"
            >
              {t("contact")}
            </Link>
          </ul>
        </div>
        <div>
          <h1>{t("Contact and Support")}</h1>
          <ul role="list" className="text-sm mt-2 flex flex-col gap-2">
            <li className="bg-gray-50 flex items-center justify-between w-full lg:w-2xs border border-black/5 p-2">
              <div className="flex flex-col gap-2">
                <h1>{t("Phone number")}</h1>
                <p>+963 985 390 000</p>
              </div>
              <FaWhatsapp size={30} className="text-[#5687af]" />
            </li>
            <li className="bg-gray-50 flex items-center justify-between w-full lg:w-2xs border border-black/5 p-2">
              <div className="flex flex-col gap-2">
                <h1>{t("Email Address")}</h1>
                <p>skymetro@gmail.com</p>
              </div>
              <LuMail size={30} className="text-[#5687af]" />
            </li>
            <li className="bg-gray-50 flex items-center justify-between w-full lg:w-2xs border border-black/5 p-2">
              <div className="flex flex-col gap-2">
                <h1>{t("Location")}</h1>
                <p>Syria, Homs-Tripoli street</p>
              </div>
              <IoLocationOutline size={30} className="text-[#5687af]" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full my-4 border-t border-black/10" />
      <p className="text-xs my-2">© 2026 SkyMetro. {t("All")}</p>
    </section>
  );
};

export default Footer;
