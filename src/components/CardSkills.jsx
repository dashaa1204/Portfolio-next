export const CardSkills = ({ logo, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 self-stretch">
      {logo}
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
