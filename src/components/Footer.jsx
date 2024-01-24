import { useTheme } from "@/context/ThemeContext";
import { CLogo } from "./icons/CLogo";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-6 sm:px-20 flex-col justify-center items-center self-stretch ${
        theme == "light"
          ? "bg-white text-gray-600"
          : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="flex sm:px-8 flex-col justify-center items-center gap-16 self-stretch">
        <div className="flex justify-center items-center gap-2">
          <CLogo />
          <p className="text-sm">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </p>
        </div>
      </div>
    </div>
  );
};
