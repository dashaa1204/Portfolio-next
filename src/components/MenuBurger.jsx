import { useTheme } from "@/context/ThemeContext";
import { LightIcon } from "./icons/LightIcon";
import { DarkIcon } from "./icons/DarkIcon";
import { useClose } from "@/context/CloseContext";

export const MenuBurger = () => {
  const { theme, setTheme } = useTheme();
  const { close, setClose } = useClose();
  const changeThemeHandler = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  const changeCloseHandler = () => {
    setClose(close == "open" ? "close" : "open");
  };
  return (
    <div
      className={`flex w-[375px] h-[667px] flex-col flex-shrink-0 absolute -z-50 items-end ${
        close == "open" ? "z-50" : "-z-50"
      }`}
    >
      <div
        className={`flex w-[320px] h-[667px] flex-col items-start ${
          theme == "light"
            ? "bg-white text-gray-950"
            : "bg-gray-950 text-gray-50"
        }`}
      >
        <div className="flex p-4 justify-between items-start self-stretch">
          <div className="text-center text-3xl font-bold">&#60; SS/&#62;</div>
          <div
            className="flex p-[6px] justify-center items-center"
            onClick={changeCloseHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex p-4 flex-col items-start gap-4 self-stretch">
          <div className="flex justify-center items-center text-base">
            About
          </div>
          <div className="flex justify-center items-cente text-base">Work</div>
          <div className="flex justify-center items-center text-base">
            Testimonials
          </div>
          <div className="flex justify-center items-center text-base">
            Contact
          </div>
        </div>
        <div className="flex p-4 flex-col items-start gap-4 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <p>Switch Theme</p>
            <div
              className="flex p-1 justify-center items-center cursor-pointer"
              onClick={changeThemeHandler}
            >
              {theme == "light" ? <LightIcon /> : <DarkIcon />}
            </div>
          </div>
          <div
            className={`flex py-[6px] px-4 justify-center items-center gap-2 self-stretch rounded-xl  ${
              theme == "light"
                ? "bg-gray-900 text-gray-50"
                : "bg-[#FFF] text-gray-950"
            }`}
          >
            <p className="text-base font-medium">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};
