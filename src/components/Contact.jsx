export const Contact = () => {
  return (
    <div className="flex py-24 px-20 flex-col justify-center items-center self-stretch">
      <div className="flex px-8 flex-col justify-center items-center gap-12 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <p className="flex py-1 px-5 bg-gray-200 rounded-xl justify-center items-center">
              Work
            </p>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch">
            <p className="flex self-stretch max-w-[576px] text-gray-600 text-xl font-normal">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4"></div>
        <div className="flex justify-center items-center gap-16 self-stretch rounded-xl"></div>
      </div>
    </div>
  );
};
