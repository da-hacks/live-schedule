import Image from "next/image";

export default function Schedule() {
  return (
    <>
      <div
        id="schedule"
        className="flex flex-col items-center text-xl text-bold my-10 p-4"
      >
        <h1 className="p-2 m-2"> Schedule </h1>
        <div className="flex justify-center gap-2 flex-col lg:flex-row">
          <div className="lg:w-1/3 border-2 border-black">
            <img src="m11.png" alt="Picture of the author" />
          </div>
          <div className="lg:w-1/3 border-2 border-black">
            <img src="m12.png" alt="Picture of the author" />
          </div>
        </div>
      </div>
    </>
  );
}
