import { exp } from "@/utils/expereince";
import { CardExperience } from "./CardExperience";
import { useTheme } from "@/context/ThemeContext";

export const Experience = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-24 px-20 flex-col justify-center items-center self-stretch ${
        theme == "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="flex flex-col px-8 justify-center items-center gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div
            className={`flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200 ${
              theme == "light" ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <p>Expierence</p>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch">
            <p>Here is a quick summary of my most recent experiences:</p>
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
