import { skills1, skills2 } from "../utils/skills";
import { CardSkills } from "./CardSkills";
import { useTheme } from "@/context/ThemeContext";

export const Skills = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-24 px-20 flex-col justify-center items-center ${
        theme == "light" ? "bg-white text-gray-950" : "bg-gray-950 text-white"
      }`}
    >
      <div className="flex px-8 flex-col items-start gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200 ${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <p>Skills</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-xl font-normal text-center">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="flex flex-col items-start gap-12 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            {skills1.map((skill, index) => (
              <CardSkills
                logo={skill.icon}
                text={skill.skillName}
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-between items-center self-stretch">
            {skills2.map((skill, index) => (
              <CardSkills
                logo={skill.icon}
                text={skill.skillName}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
