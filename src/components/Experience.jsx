import { exp } from "@/utils/expereince";
import { CardExperience } from "./CardExperience";

export const Experience = () => {
  <div className="flex py-24 px-20 flex-col justify-center items-center self-stretch bg-gray-50">
    <div className="flex px-8 justify-center items-center gap-12 self-stretch">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col justify-center items-center self-stretch">
          <p>Experience</p>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
      </div>
      {exp.map((card) => {
        <CardExperience
          logo={card.logo}
          header={card.header}
          text={card.text}
          date={card.date}
        />;
      })}
    </div>
  </div>;
};
