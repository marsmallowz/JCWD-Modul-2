import { BiError } from "react-icons/bi";

export default function ErrorPage() {
  return (
    <>
      {/* minH={"100vh"} bgColor="orange" */}
      <div className="min-h-screen bg-pink-500 flex flex-col justify-center items-center">
        <BiError className="w-20 h-20" />
        <div className="font-bold text-5xl">ERROR 404</div>
        <div className="font-bold text-2xl">Page Not Found</div>
      </div>
    </>
  );
}
