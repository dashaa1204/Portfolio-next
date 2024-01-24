import { useTheme } from "@/context/ThemeContext";

export const CardExperience = ({ logo, header, text, date }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex w-[896px] p-8 flex-col items-star rounded-xl ${
        theme == "light" ? "bg-gray-50" : "bg-gray-800"
      }`}
    >
      <div className="flex items-start gap-12 self-stretch">
        <div className="flex flex-col items-start gap-3 flex-1">{logo}</div>
        <div className="flex w-[384px] flex-col items-start gap-4">
          <h1
            className={`text-xl font-semibold text-gray-900 ${
              theme == "light" ? "text-gray-900" : "text-gray-50"
            }`}
          >
            {header}
          </h1>
          <ul className="flex flex-col items-start gap-1 self-stretch list-disc">
            {text.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
        </div>
        <div className="flex items-start gap-6">{date}</div>
      </div>
    </div>
  );
};
