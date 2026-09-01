/* eslint-disable @next/next/no-img-element */
"use client";
import { cards } from "@/data/all";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export default function Testimonial() {
  const t = useTranslations("Testimonial");
  const locale = useLocale();

  return (
    <section
      role="main"
      className="flex flex-col overflow-hidden w-full py-10 md:py-30 items-center"
    >
      <div className="text-black/85 items-center bg-white flex flex-col py-10">
        <h1
          role="heading"
          className="font-black text-[#5687af] text-xl md:text-3xl "
        >
          {t("Testimonial")}
        </h1>
        <p className="mt-2 text-center px-0 md:px-16">
          {t("+3K users have subscribed to sky metro services")}
        </p>
      </div>
      <div className="w-full flex overflow-x-hidden mask-[linear-gradient(to_right,transparent,black,black,black,transparent)]">
        {locale === "ar" ? (
          <motion.div
            animate={{
              x: ["0%", "50%"],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-x-10 p-4"
          >
            {cards.map((card, index) => (
              <div className="bg-[#5687af] py-0.5 -skew-1" key={index}>
                <div className=" w-2xs md:w-lg h-full -skew-1 p-5 bg-white flex flex-col">
                  <img
                    className="md:w-16 md:h-16 w-14 h-14 mb-2 object-cover rounded-full"
                    src={card.imageSrc}
                    alt="person"
                  />
                  <div className="flex w-full">
                    <div className="font-medium flex items-center gap-3 w-full">
                      <div className="md:text-2xl text-lg">{card.name}</div>
                      <div className="md:text-lg text-sm">
                        <FaXTwitter />
                      </div>
                    </div>
                  </div>
                  <h5
                    role="heading"
                    className="text-gray-400 mb-2 md:text-sm text-xs"
                  >
                    {t(card.desc)}
                  </h5>
                  <p>{card.quote}</p>
                </div>
              </div>
            ))}
            {cards.map((card, index) => (
              <div className="bg-[#5687af] py-0.5 -skew-1" key={index}>
                <div className=" w-2xs md:w-lg h-full -skew-1 p-5 bg-white flex flex-col">
                  <img
                    role="img"
                    className="md:w-16 md:h-16 w-14 h-14 mb-2 object-cover rounded-full"
                    src={card.imageSrc}
                    alt="person"
                  />
                  <div className="flex w-full">
                    <div className="font-medium flex items-center gap-3 w-full">
                      <div className="md:text-2xl text-lg">{card.name}</div>
                      <div className="md:text-lg text-sm">
                        <FaXTwitter />
                      </div>
                    </div>
                  </div>
                  <h5
                    role="heading"
                    className="text-gray-400 mb-2 md:text-sm text-xs"
                  >
                    {t(card.desc)}
                  </h5>
                  <p>{t(card.quote)}</p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-x-10 p-4"
          >
            {cards.map((card, index) => (
              <div className="bg-[#5687af] py-0.5 -skew-1" key={index}>
                <div className=" w-2xs md:w-lg h-full -skew-1 p-5 bg-white flex flex-col">
                  <img
                    className="md:w-16 md:h-16 w-14 h-14 mb-2 object-cover rounded-full"
                    src={card.imageSrc}
                    alt="person"
                  />
                  <div className="flex w-full">
                    <div className="font-medium flex items-center gap-3 w-full">
                      <div className="md:text-2xl text-lg">{card.name}</div>
                      <div className="md:text-lg text-sm">
                        <FaXTwitter />
                      </div>
                    </div>
                  </div>
                  <h5 className="text-gray-400 mb-2 md:text-sm text-xs">
                    {t(card.desc)}
                  </h5>
                  <p>{t(card.quote)}</p>
                </div>
              </div>
            ))}
            {cards.map((card, index) => (
              <div className="bg-[#5687af] py-0.5 -skew-1" key={index}>
                <div className=" w-2xs md:w-lg h-full -skew-1 p-5 bg-white flex flex-col">
                  <img
                    role="img"
                    className="md:w-16 md:h-16 w-14 h-14 mb-2 object-cover rounded-full"
                    src={card.imageSrc}
                    alt="person"
                  />
                  <div className="flex w-full">
                    <div className="font-medium flex items-center gap-3 w-full">
                      <div className="md:text-2xl text-lg">{card.name}</div>
                      <div className="md:text-lg text-sm">
                        <FaXTwitter />
                      </div>
                    </div>
                  </div>
                  <h5
                    role="heading"
                    className="text-gray-400 mb-2 md:text-sm text-xs"
                  >
                    {t(card.desc)}
                  </h5>
                  <p>{t(card.quote)}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
