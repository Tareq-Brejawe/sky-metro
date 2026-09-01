"use client";
import { BiSupport } from "react-icons/bi";
import { PiTreeStructureFill } from "react-icons/pi";
import { TiWiFi } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
const signalWaves = [
  { size: 180, delay: 0 },
  { size: 280, delay: 0.8 },
  { size: 380, delay: 1.6 },
  { size: 480, delay: 2.4 },
];

const particles = [
  { x: "35%", y: "25%", delay: 0 },
  { x: "42%", y: "75%", delay: 2 },
  { x: "56%", y: "60%", delay: 1.4 },
  { x: "67%", y: "72%", delay: 2.1 },
  { x: "75%", y: "55%", delay: 2.8 },
  { x: "30%", y: "80%", delay: 3.5 },
  { x: "70%", y: "26%", delay: 3.5 },
  { x: "60%", y: "20%", delay: 0.1 },
];

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Hero");
  const locale = useLocale();
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 800) {
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
    <section role="main" className="h-full relative">
      <div className="absolute left-[18%] top-[43%] -translate-x-1/2 -translate-y-1/2">
        {signalWaves.map((wave, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border border-white/30"
            style={{
              width: wave.size,
              height: wave.size,
              left: -wave.size / 2,
              top: -wave.size / 2,
            }}
            initial={{
              scale: 0.3,
              opacity: 0,
            }}
            animate={{
              scale: [0.3, 1],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4,
              delay: wave.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Animated particles / data signals */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-white
            shadow-[0_0_15px_rgba(255,255,255,0.9)]
          "
          style={{
            left: particle.x,
            top: particle.y,
          }}
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.3, 1.4, 0.3],
            x: [0, 40, 80],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle moving light */}
      <motion.div
        className="
          absolute
          left-1/4
          top-1/3
          h-125
          w-125
          rounded-full
          bg-white/5
          blur-[100px]
        "
        animate={{
          x: [0, 120, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        role="main"
        className="bg-[url(../images/background.jpg)] bg-cover bg-center w-full py-50 min-h-screen flex justify-center items-center"
      >
        {isScrolled && (
          <button
            onClick={() => {
              scrollToTop();
            }}
            className={`fixed ${locale === "ar" ? "left-6 md:left-20" : "right-6 md:right-20"}  bottom-10 text-[#5687af] z-100 bg-white border-2 border-[#5687af] cursor-pointer rounded-full p-2`}
          >
            <FaChevronUp size={25} />
          </button>
        )}

        <div className="flex flex-col gap-y-2 px-6 xl:px-0">
          <h1
            role="heading"
            className={`text-3xl md:text-5xl xl:text-6xl mx-auto w-full md:w-lg xl:w-xl  ${locale === "ar" ? "xl:text-right" : "font-black xl:text-left"} leading-9 md:leading-14 xl:leading-18 text-center text-white text-shadow-lg`}
          >
            {t("The best for a stable connection")}
          </h1>
          <div
            className={`flex text-white mx-auto flex-wrap gap-y-6 justify-center xl:justify-start xl:mx-0 text-xs xl:text-sm ${locale === "ar" ? "font-light" : "font-black"} gap-x-10 xl:gap-x-4`}
          >
            <div className="flex items-center gap-x-1.5">
              <BiSupport size={18} strokeWidth={1} />
              <span>{t("Support 24/7")}</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <PiTreeStructureFill size={18} />
              <span>{t("Quick installation")}</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <TiWiFi size={18} />
              <span>{t("Wide coverage")}</span>
            </div>
          </div>
          <div className="mt-8 z-50 flex flex-col items-center xl:items-start">
            {locale === "ar" ? (
              <button className="w-2xs border border-white  px-2 pb-2 pt-3 cursor-pointer text-[#5687af] xl:text-white bg-white xl:bg-transparent hover:bg-white hover:text-[#5687af] transition duration-150 ease-out">
                تغعيل
              </button>
            ) : (
              <button className="w-2xs border font-black border-white px-2 pb-2 pt-3 cursor-pointer text-[#5687af] xl:text-white bg-white xl:bg-transparent hover:bg-white hover:text-[#5687af] transition duration-150 ease-out">
                Activate
              </button>
            )}

            <p className="text-white/70 mt-3 text-xs">
              {t("Packages start from $6")}
            </p>
          </div>
          <button
            onClick={scrollToNextSection}
            aria-label="Scroll down"
            className="group absolute cursor-pointer bottom-8 left-1/2 -translate-x-1/2 
                 flex h-10 w-10 items-center justify-center 
                 rounded-full border border-white/40 
                 text-white transition-all duration-300 
                 hover:border-white hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 16"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
