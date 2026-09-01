"use client";
import { Col, Form, FormProps, Input, message, Row } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { PiCityLight } from "react-icons/pi";
import { TiPhoneOutline } from "react-icons/ti";
type ContactFormValues = {
  name: string;
  email: string;
  city: string;
  address: string;
  phone: string;
};
const Contact = () => {
  const [form] = Form.useForm<ContactFormValues>();
  const t = useTranslations("Contact");
  const locale = useLocale();

  const handleSubmit: FormProps<ContactFormValues>["onFinish"] = () => {
    message.success("Your details have been submitted.");
  };

  return (
    <section
      role="main"
      className="py-40 px-6 flex flex-col items-center text-black/85 bg-[#5687af]"
    >
      <div className="items-center text-white flex flex-col ">
        <h1 role="heading" className="font-black text-xl md:text-3xl ">
          {t("Contact us")}
        </h1>
        <p className="mt-2 w-full lg:w-3xl text-center px-0 md:px-16">
          {t("Your")}
        </p>
        <div className="py-6 lg:py-10 px-6 rounded-lg mt-10 bg-white ">
          <Form
            id="form"
            aria-label="Form"
            role="form"
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={handleSubmit}
          >
            <Row gutter={[20, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={t("Full name")}
                  name="name"
                  rules={[
                    { required: true, message: t("name") },
                    {
                      min: 2,
                      message: t("Name must"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<CiUser size={20} />}
                    placeholder="e.g. Alex Morgan"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={t("Email address")}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: t("email address"),
                    },
                    {
                      type: "email",
                      message: t("valid email"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<IoMailOutline size={20} />}
                    placeholder="you@example.com"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={t("City")}
                  name="city"
                  rules={[{ required: true, message: t("city") }]}
                >
                  <Input
                    size="large"
                    prefix={<PiCityLight size={20} />}
                    placeholder="e.g. Damascus"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={t("Phone number")}
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: t("phone"),
                    },
                    {
                      pattern: /^[+\d\s()-]{7,}$/,
                      message: t("valid phone"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<TiPhoneOutline size={20} />}
                    placeholder="e.g. +963 944 123 456"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={t("Address")}
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: t("address"),
                    },
                  ]}
                >
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder={t("street")}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="w-full flex justify-center">
              <button className=" bg-[#5687af] text-white border hover:text-[#5687af] hover:bg-white hover:border-[#5687af] ease-out duration-200 px-6 py-2  cursor-pointer">
                {locale === "ar" ? "إرسال" : "Send"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
