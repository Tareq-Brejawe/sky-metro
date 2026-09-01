"use client";
import { useTranslations } from "next-intl";
import Card from "./ui/Card";
import {
  motion,
  useMotionTemplate,
  useTime,
  useTransform,
} from "framer-motion";
const Pricing = () => {
  const time = useTime();
  const t = useTranslations("Prices");
  // 2. Map the continuous time to a full 360-degree rotation every 3 seconds
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  // 3. Generate a dynamic string for the CSS conic-gradient background
  const background = useMotionTemplate`conic-gradient(from ${rotate}deg, #5687af, #ffffff,#ffffff)`;

  return (
    <section
      role="main"
      id="pricing"
      className="w-full flex py-10 md:py-30 px-6 xl:px-20"
    >
      <div className="relative shadow-lg/4 rounded-4xl md:rounded-full overflow-hidden p-0.5 mx-auto">
        <motion.div
          style={{ background }}
          className="absolute inset-[-1000%] opacity-80 "
        />
        <div className="text-black/85 relative items-center bg-white rounded-4xl md:rounded-full mx-auto flex flex-col py-10 md:py-20 px-4 md:px-25 2xl:px-40">
          <h1
            role="heading"
            className="font-black text-[#5687af] text-xl md:text-3xl "
          >
            {t("Plans and prices")}
          </h1>
          <p className="mt-2 text-center px-0 md:px-16">
            {t("Suitable internet")}
          </p>
          <div className="my-10 w-full md:w-auto grid gap-x-6 gap-y-4 2xl:gap-y-20 grid-cols-1 md:grid-cols-2 items-stretch 2xl:grid-cols-4">
            <Card
              title={t("1 Mbps")}
              price="$6"
              cardPrice={true}
              desc={t("Basic browsing and media")}
            />
            <Card
              title={t("2 Mbps")}
              price="$10"
              cardPrice={true}
              desc={t("Light use and social media")}
            />
            <Card
              title={t("4 Mbps")}
              price="$14"
              cardPrice={true}
              desc={t("Small families and video calls")}
            />
            <Card
              title={t("6 Mbps")}
              price="$18"
              cardPrice={true}
              desc={t("View in standard quality")}
            />
            <Card
              title={t("10 Mbps")}
              price="$25"
              cardPrice={true}
              desc={t("Watch HD and work remotely")}
            />
            <Card
              title={t("15 Mbps")}
              price="$30"
              cardPrice={true}
              desc={t("Multiple users and small offices")}
            />
            <Card
              title={t("20 Mbps")}
              price="$35"
              cardPrice={true}
              desc={t("Heavy viewing and gaming")}
            />
            <Card
              title={t("+25 Mbps")}
              price={t("In order")}
              cardPrice={true}
              desc={t("Companies and institutions")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
