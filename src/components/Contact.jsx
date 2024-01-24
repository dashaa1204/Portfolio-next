import { useTheme } from "@/context/ThemeContext";
import { GithubLogo } from "./icons/GithubLogo";
import { TwitterLogo } from "./icons/TwitterLogo";
import { FigmaLogo } from "./icons/FigmaLogo";
import { EmailLogo } from "./icons/EmailLogo";
import { CopyLogo } from "./icons/CopyLogo";
import { PhoneLogo } from "./icons/PhoneLogo";

export const Contact = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-24 px-20 flex-col justify-center items-center self-stretch ${
        theme == "light"
          ? "bg-white text-gray-600"
          : "bg-gray-950 text-gray-300"
      }`}
    >
      <div className="flex px-8 flex-col justify-center items-center gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200 ${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <p>Get in touch</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-xl font-normal text-center max-w-[576px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-5">
            <EmailLogo />
            <p
              className={` text-center text-4xl font-semibold ${
                theme == "light" ? "text-gray-900" : "text-gray-50"
              }`}
            >
              reachsagarshah@gmail.com
            </p>
            <CopyLogo />
          </div>
          <div className="flex justify-center items-center gap-5">
            <PhoneLogo />
            <p
              className={`text-center text-4xl font-semibold ${
                theme == "light" ? "text-gray-900" : "text-gray-50"
              }`}
            >
              +91 8980500565
            </p>
            <CopyLogo />
          </div>
        </div>
        <div className="flex justify-center items-center gap-16 self-stretch rounded-xl">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-base ">
              You may also find me on these platforms!
            </p>
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
              <div className="flex items-center gap-1">
                <div className="flex p-[6px] justify-center items-center roundeLg">
                  <GithubLogo />
                </div>
                <div className="flex p-[6px] justify-center items-center roundeLg">
                  <TwitterLogo />
                </div>
                <div className="flex p-[6px] justify-center items-center roundeLg">
                  <FigmaLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
