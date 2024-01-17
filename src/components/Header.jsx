export const Header = () => {
  return (
    <div className="flex px-20 py-4 justify-between">
      <div className="flex min-w-full justify-between items-center">
        <div className="text-center text-3xl">&#60; SS/&#62;</div>
        <div className="flex justify-center items-center gap-6">
          <a className="text-base">About</a>
          <a className="text-base">Work</a>
          <a className="text-base">Testimonials</a>
          <a className="text-base">Contact</a>
          <div className="w-1 h-6">
            <svg
              width="1"
              height="24"
              viewBox="0 0 1 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" y1="24" x2="0.5" stroke="#F3F4F6" />
            </svg>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex p-1 justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 2V4"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20V22"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.92993 4.92969L6.33993 6.33969"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6599 17.6602L19.0699 19.0702"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12H4"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12H22"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.33993 17.6602L4.92993 19.0702"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.0699 4.92969L17.6599 6.33969"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex py-1.5 px-4 justify-center items-center gap-2 border rounded-xl bg-gray-900 text-gray-50 text-base">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
