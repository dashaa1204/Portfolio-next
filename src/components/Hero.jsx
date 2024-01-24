import { useTheme } from "@/context/ThemeContext";
import { GithubLogo } from "./icons/GithubLogo";
import { TwitterLogo } from "./icons/TwitterLogo";
import { FigmaLogo } from "./icons/FigmaLogo";
import { LocationLogo } from "./icons/LocationLogo";

export const Hero = () => {
  const { theme } = useTheme();
  const headerClass =
    theme == "light" ? "bg-white text-black" : "bg-gray-950 text-white";
  const imgClass = theme == "light" ? "border-white" : "border-gray-950";

  return (
    <div
      className={`flex py-16 px-4 justify-between items-start self-stretch ${headerClass} sm: py-24 px-20`}
    >
      <div className="flex flex-col items-start gap-12 flex-1 sm:px-8 flex-wrap">
        <div className="flex flex-col justify-center items-start gap-12 max-w-[768px]">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-6xl font-bold leading-tight">Hi, I’m Sagar 👋</p>
            <p className="text-base font-normal leading-6 w-[768px]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex item-center gap-2 self-stretch">
              <LocationLogo />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981" />
              </svg>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex p-1.5 justify-center items-center">
              <GithubLogo />
            </div>
            <div className="flex p-1.5 justify-center items-center">
              <TwitterLogo />
            </div>
            <div className="flex p-1.5 justify-center items-center">
              <FigmaLogo />
            </div>
          </div>
        </div>
        <div className="flex min-w-96 flex-col justify-center items-end flex-1">
          <div className="w-80 h-auto ">
            <div
              className={`w-[280px] h-[320px] shrink-0 absolute  mt-10 ml-10 ${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              }`}
            ></div>
            <img
              className={`w-[280px] h-[320px] border-8 shrink-0 relative ${imgClass}`}
              src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6ilx-NOb63~KzVYyZfxx4qzRN~gm9QHjip~sIpK9MTVSZsX~huwLpZqpJyqW7GDTT8lB8QtBCj5-2PtU-Ygp48aaoTUuruT2gkBXQL~lHchh7pKMdkHIJrb2oMYnvdAYQNxOMjjUIF8HDscGx5Nt7iw4F0WHx0HmiLM~STQEdaUIw0hp1E28oW5KSCJTY9dpgSECxgzNyTUNroqNwgsE5X4gYOS6SIFW~iIc98LskU-vU9DVPo3dEzu2N-2Fz4UiQZedr6UAGezp4AEFbGvN6RWj7EetJyu7prBfAxtS4Q0dAi36VtSyse6uAVnFGuXHQ9Y83-~6UcTO1YSVEzzGQ__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
