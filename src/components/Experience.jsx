import { exp } from "@/utils/expereince";
import { CardExperience } from "./CardExperience";

export const Experience = () => {
  return (
    <div className="flex py-24 px-20 flex-col justify-center items-center self-stretch bg-gray-50">
      <div className="flex flex-col px-8 justify-center items-center gap-12 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <p className="bg-gray-200 rounded-xl py-1 px-5">Experience</p>
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
