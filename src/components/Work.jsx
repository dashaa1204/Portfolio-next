import { work } from "@/utils/workIcon";
import { WorkCard } from "./WorkCard";
import { useTheme } from "@/context/ThemeContext";

export const Work = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-16 px-4 sm:py-24 sm:px-20 flex-col justify-center items-center self-stretch ${
        theme == "light"
          ? "bg-white text-gray-600"
          : "bg-gray-950 text-gray-300"
      }`}
    >
      <div className="flex gap-6 sm:px-8 flex-col justify-center items-center sm:gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div
            className={`flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200 ${
              theme == "light" ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <p>Work</p>
          </div>
          <div className="flex justify-center items-center self-stretch">
            <p
              className={`flex self-stretch max-w-[576px] text-xl font-normal text-center ${
                theme == "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        {work.map((element, index) => (
          <WorkCard
            pic={element.pic}
            text={element.text}
            tech={element.tech}
            header={element.header}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
