"use client";
import { EMAIL_REGEX } from "@/constants/regex";
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import ModalSuccess from "./components/ModalSuccess";
import { SOCIAL_MEDIA_LIST } from "./index.constants";
import useIndex from "./index.hook";

const Footer = () => {
  const {
    email,
    setEmail,
    handleSubscribe,
    loading,
    modalSuccess,
    setModalSuccess,
  } = useIndex();

  return (
    <div className="bottom-0 border-t w-full text-primary">
      <ModalSuccess
        isOpen={modalSuccess}
        onClose={() => setModalSuccess(false)}
      />
      <Container>
        <div className="py-4 md:py-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="text-center md:text-left">
            <h2 className="font-semibold">Sign up to our newsletter</h2>
            <p className="text-xs text-gray-400">
              Stay up to date with latest news, announcements, and articles
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:w-1/3 justify-end">
            <Input
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
              placeholder="example@gmail.com"
              type="email"
              errorMsg={
                !EMAIL_REGEX.test(email) && email ? "Email is not valid" : ""
              }
            />
            <Button
              disabled={
                email === "" || (!EMAIL_REGEX.test(email) && email !== "")
              }
              onClick={handleSubscribe}
              loading={loading}
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-between items-center border-t py-4">
          <p className="text-xs">
            © 2023 Ezra Audivano Dirfa. All rights reserved.
          </p>

          <div className="flex gap-2">
            {SOCIAL_MEDIA_LIST.map((socialMedia, key) => (
              <a
                href={socialMedia.link}
                target="_blank"
                className="cursor-pointer"
                key={key}
              >
                {socialMedia.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
