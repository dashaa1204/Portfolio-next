export const About = () => {
  return (
    <div className="flex py-24 px-20 justify-between items-start bg-gray-50">
      <div className="flex flex-col px-8 items-center gap-12">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
              About me
            </div>
          </div>
        </div>
        <div className="flex item-start gap-12">
          <div className="flex min-w-[444px] flex-col flex-1">
            <div className="w-[440px] h-[520px]">
              <div className="w-[400px] h-[480px] border-8px border-gray-50 bg-gray-200 absolute mt-10 mr-20"></div>
              <img
                className="w-[400px] h-[480px] border-8 border-gray-50 absolute ml-10"
                src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
                alt=""
              />
            </div>
          </div>
          <div className="flex min-w-[444px] flex-col gap-6 flex-1">
            <h1>Curious about me? Here you have it:</h1>
            <div className="flex flex-col items-start gap-4">
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
              <div className="flex items-start gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-base leading-6">
                    B.E. in Computer Engineering
                  </p>
                  <p className="text-base leading-6">Full time freelancer</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-base leading-6">Avid learner</p>
                  <p className="text-base leading-6">Aspiring indie hacker</p>
                </div>
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
