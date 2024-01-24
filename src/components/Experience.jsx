import { exp } from "@/utils/expereince";
import { CardExperience } from "./CardExperience";
import { useTheme } from "@/context/ThemeContext";

export const Experience = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-16 px-4 flex-col justify-center items-center self-stretch ${
        theme == "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:gap-12 sm:px-8">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div
            className={`flex flex-col justify-center items-center self-stretch`}
          >
            <div
              className={`flex py-1 px-5 justify-center items-center rounded-xl ${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              } `}
            >
              Expierence
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch">
            <p className="max-w-[576px] self-stretch text-center text-lg">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        {exp.map((card, index) => (
          <CardExperience
            header={card.header}
            logo={card.logo}
            text={card.text}
            date={card.date}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
