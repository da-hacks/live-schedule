import Countdown from "./Countdown";
import Image from "next/image";
export default function Landing() {
  return (
    <>
      <div className="font-SFMono-Regular">
        {
          // <Countdown targetDate="2024-04-20T00:00:00" />
        }

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-56">
            <div className="sm:mb-8 sm:flex sm:justify-center gap-4">
              <div className="flex justify-center lg:relative rounded-full px-4 py-1 lg:text-base text-sm leading-6 text-black lg:ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="#schedule" className="font-semibold">
                  Schedule &rarr;
                </a>
              </div>
              <div className="flex justify-center lg:relative rounded-full px-4 py-1 lg:text-base text-sm leading-6 text-black lg:ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a
                  href="https://deanzahacks.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500"
                >
                  Go back to main website &rarr;
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Countdown
                //   className="xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white"
                targetDate="2024-06-01T13:00:00"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className=" font-semibold tracking-tight text-black lg:text-4xl text-2xl">
                UNTIL HACKING ENDS!
              </h1>
              <p className="mt-6 text-lg leading-8 text-black">
                Note: all times are in PST (California time)
              </p>
              <h1 className="text-2xl mt-5">Discord</h1>
              <div className="flex w-max border-2 justify-center p-2 hover:border-blue-500 rounded-md">
                <a href="https://discord.com/invite/V225BEAD9S">
                  <Image
                    src="/qrcode_discord.com.png"
                    alt=""
                    width={250}
                    height={250}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
