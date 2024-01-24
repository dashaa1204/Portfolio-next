import { useTheme } from "@/context/ThemeContext";
import { LightIcon } from "./icons/LightIcon";
import { DarkIcon } from "./icons/DarkIcon";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const buttonClassname = `${
    theme == "light" ? "bg-gray-950 text-gray-300" : "bg-[#FFF] text-gray-950"
  }`;

  const headerClassname = ` ${
    theme == "light" ? "bg-[#FFF] text-gray-950" : "bg-gray-950 text-gray-300"
  }`;

  return (
    <div
      className={`flex p-4 justify-between items-center self-stretch ${headerClassname} sm:px-20`}
    >
      <div className="flex justify-between items-center flex-[100%] sm:px-8">
        <div className="text-center text-3xl font-bold">&#60; SS/&#62;</div>
        <div className="justify-center items-center gap-6 hidden sm:flex">
          <a className="text-base">About</a>
          <a className="text-base">Work</a>
          <a className="text-base">Testimonials</a>
          <a className="text-base">Contact</a>
          <div className="w-1 h-6">
            <svg
              width="1"
              height="24"
              viewBox="0 0 1 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" y1="24" x2="0.5" stroke="#F3F4F6" />
            </svg>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div
              className="flex p-1 justify-center items-center cursor-pointer"
              onClick={changeThemeHandler}
            >
              {theme == "light" ? <LightIcon /> : <DarkIcon />}
            </div>
            <div
              className={`flex py-1.5 px-4 justify-center items-center gap-2 border rounded-xl text-base ${buttonClassname}`}
            >
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
