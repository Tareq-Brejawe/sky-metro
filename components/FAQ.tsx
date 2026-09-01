import React from "react";
import { Collapses } from "./ui/Collapse";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("Questions");
  return (
    <section
      role="menuitem"
      className="w-full flex flex-col py-10 md:py-30 px-6 xl:px-20"
    >
      <div className="text-black/85 items-center  flex flex-col py-10">
        <h1
          role="heading"
          className="font-black text-[#5687af] text-xl md:text-3xl "
        >
          {t("Popular questions")}
        </h1>
        <p className="mt-2 text-center px-0 md:px-16">{t("Clear answers")}</p>
      </div>
      <div className="lg:w-3xl w-full mx-auto">
        <Collapses />
      </div>
    </section>
  );
};

export default FAQ;
