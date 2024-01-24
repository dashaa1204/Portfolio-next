import { useTheme } from "@/context/ThemeContext";

export const About = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex py-16 px-4 justify-between items-start sm:py-24 sm:px-20 sm:self-stretch ${
        theme == "light"
          ? "bg-gray-50 text-gray-950"
          : "bg-gray-900 text-gray-50"
      }`}
    >
      <div className="flex flex-col items-center gap-6 flex-[100%] sm:gap-12 sm:px-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex py-1 px-5 justify-center items-center rounded-xl ${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              About me
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-12 self-stretch sm:flex-row">
          <div className="flex flex-col items-center self-stretch">
            <div className="w-[320px] h-[380px] relative flex justify-center sm:w-[440px] sm:h-[520px]">
              <div
                className={`w-[320px] h-[360px] border-8px border-gray-50  absolute mt-5 sm:mt-10 sm:mr-10 sm:w-[400px] sm:h-[480px] ${
                  theme == "light" ? "bg-gray-200" : "bg-gray-700"
                }`}
              ></div>
              <img
                className={`w-[280px] h-[360px] border-8 relative sm:w-[400px] sm:h-[480px] ${
                  theme == "light" ? "border-gray-50" : "border-gray-900"
                }`}
                src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <h1 className="text-2xl font font-semibold sm:text-3xl">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <p className="text-base leading-6">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="text-base leading-6">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="text-base leading-6">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="text-base leading-6">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <div className="flex items-start gap-[10px] self-stretch">
                <ul className="flex flex-col gap-[10px] list-disc self-stretch ml-5">
                  <li className="text-base leading-6">
                    B.E. in Computer Engineering
                  </li>
                  <li className="text-base leading-6">Full time freelancer</li>
                </ul>
                <ul className="flex flex-col gap-[10px] list-disc self-stretch ml-5">
                  <li className="text-base leading-6">Avid learner</li>
                  <li className="text-base leading-6">Aspiring indie hacker</li>
                </ul>
              </div>
              <p className="text-base leading-6">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
