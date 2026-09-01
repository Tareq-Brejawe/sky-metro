"use client";
import { ServicesAr, ServicesEn } from "@/images";
import Image from "next/image";
import { CiStreamOn } from "react-icons/ci";
import Card from "./ui/Card";
import { LuRocket } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import Animatebackground from "./Animatebackground";
import { useLocale, useTranslations } from "next-intl";

const Services = () => {
  const locale = useLocale();
  const t = useTranslations("Services");

  return (
    <section
      role="main"
      className="flex relative flex-col gap-y-8 items-center 2xl:flex-row w-full justify-between text-black/85 py-10 md:py-30 px-6 xl:px-20"
    >
      <Animatebackground />
      <div className="w-xs md:w-sm 2xl:w-6xl h-full">
        {locale === "ar" ? (
          <Image
            role="img"
            src={ServicesAr}
            className="w-full h-full"
            alt="Sky Metro"
          />
        ) : (
          <Image
            role="img"
            src={ServicesEn}
            className="w-full h-full"
            alt="Sky Metro"
          />
        )}
      </div>
      <div
        className={`flex flex-col gap-y-8 items-center ${locale === "ar" ? "2xl:pr-6" : "2xl:pl-6"} w-full justify-center`}
      >
        <h1 className="font-black w-full 2xl:w-full md:w-2xl text-lg md:text-3xl text-center">
          {t("Stable internet")}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
          <Card
            icon={
              <CiStreamOn
                size={40}
                strokeWidth={0.5}
                className="text-[#5687af]"
              />
            }
            title={t("Fiber to main towers")}
            desc={t("We start")}
          />
          <Card
            icon={
              <LuRocket
                size={40}
                strokeWidth={1.5}
                className="text-[#5687af]"
              />
            }
            title={t("Wide wireless distribution")}
            desc={t("High-performance")}
          />
          <Card
            icon={<GoShieldCheck size={40} className="text-[#5687af]" />}
            title={t("Fixed at a clear price")}
            desc={t("Designed to stay")}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
