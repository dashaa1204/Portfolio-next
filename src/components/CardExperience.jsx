export const CardExperience = (logo, header, text, date) => {
  return (
    <div className="flex w-[896px] p-8 flex-col items-start">
      <div className="flex items-start gap-12 self-stretch">
        <div className="flex flex-col items-start gap-3 flex-1">{logo}</div>
        <div className="flex w-[384px] flex-col items-start gap-4">
          <h1>{header}</h1>
          <ul className="flex flex-col items-start gap-1 self-stretch">
            {text.map((list) => {
              <li>{list}</li>;
            })}
          </ul>
        </div>
        <div className="flex items-start gap-6">{date}</div>
      </div>
    </div>
  );
};
