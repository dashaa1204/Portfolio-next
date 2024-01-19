export const WorkCard = ({ pic, header, text, tech, index }) => {
  if (index % 2 === 0) {
    return (
      <div className="flex w-[1152px] items-start">
        <div className="flex p-12 justify-center items-center flex-1 self-stretch">
          {pic}
        </div>
        <div className="flex p-12 flex-col items-center gap-6 flex-1 self-stretch">
          <h1>{header}</h1>
          <p>{text}</p>
          <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
            {tech.map((unit) => {
              return (
                <div className="flex py-1 px-5 justify-center items-center bg-gray-200 rounded-xl">
                  {unit}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <div className="flex p-[6px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-[1152px] items-start flex-row-reverse">
        <div className="flex p-12 justify-center items-center flex-1 self-stretch">
          {pic}
        </div>
        <div className="flex p-12 flex-col items-center gap-6 flex-1 self-stretch">
          <h1>{header}</h1>
          <p>{text}</p>
          <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
            {tech.map((unit) => {
              return (
                <div className="flex py-1 px-5 justify-center items-center bg-gray-200 rounded-xl">
                  {unit}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <div className="flex p-[6px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
};