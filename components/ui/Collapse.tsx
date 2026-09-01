"use client";
import { Collapse, ConfigProvider } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { CollapseProps } from "antd";
export const Collapses = () => {
  const t = useTranslations("Questions");
  const locale = useLocale();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t(
        "What is difference between satellite internet and wireless internet?",
      ),
      children: <p>{t("Satellite internet")}</p>,
    },
    {
      key: "2",
      label: t("Is the package speed the same as the download speed?"),
      children: <p>{t("No")}</p>,
    },
    {
      key: "3",
      label: t("Can I change the package speed at any time?"),
      children: <p>{t("You can")}</p>,
    },
    {
      key: "4",
      label: t("What about maintenance and technical support?"),
      children: <p>{t("Our technical")}</p>,
    },
    {
      key: "5",
      label: t("How is payment made?"),
      children: <p>{t("The service")}</p>,
    },
  ];

  return (
    <>
      <div className="hidden lg:block">
        <ConfigProvider direction={locale === "ar" ? "rtl" : "ltr"}>
          <Collapse size="large" accordion items={items} />
        </ConfigProvider>
      </div>
      <div className="block lg:hidden">
        <Collapse size="medium" accordion items={items} />
      </div>
    </>
  );
};
