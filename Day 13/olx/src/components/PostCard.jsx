import { AiOutlineHeart } from "react-icons/ai";

export default function PostCard() {
  return (
    <div className="relative flex flex-col border max-h-96 rounded-md">
      <div className="p-2">
        <div className="relative">
          <div className="absolute top-0 flex flex-row justify-between w-full h-1/5 items-center">
            <div className="absolute left-0 justify-between py-2 w-1/3 bg-yellow-400 text-xs text-center font-bold">
              HIGHLIGHT
            </div>
            <div className="absolute right-0 justify-between p-2 text-xs ">
              <AiOutlineHeart className="w-6 h-6" />
            </div>
          </div>
          <img
            src="/assets/japan.jpg"
            alt=""
            className="h-56 w-full object-cover"
          />
        </div>
      </div>
      <div className="pl-2 bg-orange-300 bg-clip-padding ">
        <div className="bg-white p-2">
          <div className="font-bold text-xl ">RP 65.000.000</div>
          <div className="text-xl truncate whitespace-nowrap text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="flex justify-between text-gray-500 text-sm">
            <div>Cengkareng, Jakarta Barat</div>
            <div>03, Nov</div>
          </div>
        </div>
      </div>
      {/* <div>RP 65.000.000</div> */}
    </div>
  );
}
