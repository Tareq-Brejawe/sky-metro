import { Cards } from "@/types";
import { useTranslations } from "next-intl";

const Card = (params: Cards) => {
  const t = useTranslations("Prices");

  return (
    <div className="md:w-3xs w-full bg-white border hover:scale-105 scale-100 duration-200 hover:shadow-md ease-out border-gray-200 rounded-lg flex flex-col gap-y-2 items-center p-4">
      {params.icon && (
        <div className="bg-[#5687af]/25 shadow-sm p-1 px-2 rounded-lg">
          {params.icon}
        </div>
      )}

      <h4
        role="heading"
        className={`font-black text-[#5687af] ${params.cardPrice ? "text-2xl 2xl:text-4xl" : "text-base"}`}
      >
        {params.title}
      </h4>
      {params.price &&
        params.price != "In order" &&
        params.price != "عند الطلب" && (
          <h1 className="my-1">
            <span className="text-xl 2xl:text-3xl font-black text-shadow-sm">
              {params.price}
            </span>
            /{t("M")}
          </h1>
        )}
      {params.price && params.price === "In order" && (
        <h1 className="text-xl 2xl:text-3xl my-1 font-black text-shadow-sm">
          {params.price}
        </h1>
      )}
      {params.price && params.price === "عند الطلب" && (
        <h1 className="text-xl 2xl:text-3xl my-1 font-black text-shadow-sm">
          {params.price}
        </h1>
      )}
      <p className="text-center font-medium text-sm">{params.desc}</p>
    </div>
  );
};

export default Card;
