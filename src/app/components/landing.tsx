import Countdown from "./Countdown";
export default function Landing() {
  return (
    <>
      <div className="border-2 border-black h-screen ">
        {
          // <Countdown targetDate="2024-04-20T00:00:00" />
        }

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-base leading-6 text-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Go back to main{" "}
                <a
                  href="https://deanza.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#2ca036]"
                >
                  website &rarr;
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Countdown
                //   className="xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white"
                targetDate="2024-06-01T18:00:00"
              />
            </div>
            <div className="text-center">
              <h1 className=" font-bold tracking-tight text-black lg:text-4xl text-2xl">
                UNTIL HACKING ENDS!
              </h1>
              <p className="mt-6 text-lg leading-8 text-black">
                Note: all times are in PST (California time)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
