import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-white text-black text-bold text-7xl">
      <h1>404 Not Found</h1>
      <div className="border-2 border-black rounded-full p-3 text-5xl bg-soft-white hover:bg-black hover:text-white shadow focus:outline-none cursor-pointer">
        <Link href={"/"}>Go Back to Home</Link>
      </div>
    </div>
  );
}
