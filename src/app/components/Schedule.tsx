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
          <Image
            src="/schedule/m11.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Image
            src="/schedule/m12.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}
