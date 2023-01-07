import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function PostCard(props) {
  let navigate = useNavigate();
  console.log(props.item);
  return (
    <div
      onClick={() => {
        navigate("/item/" + props.item.id, { replace: true });
      }}
      className="relative flex flex-col border-2 max-h-96 rounded-md shadow-sm cursor-pointer"
    >
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
            src={props.item.listFoto[0]}
            alt="/assets/japan.jpg"
            className="h-56 w-full object-cover"
          />
        </div>
      </div>
      <div className="pl-2 bg-yellow-500 bg-clip-padding ">
        <div className="bg-white p-2">
          <div className="font-bold text-xl ">
            RP {parseFloat(props.item.harga).toLocaleString("en")}
          </div>
          <div className="text-xl truncate whitespace-nowrap text-gray-500">
            {props.item.deskripsi}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
          </div>
          <div className="flex justify-between text-gray-500 text-sm">
            <div className="truncate w-2/3">
              {props.item.kota.label}, {props.item.wilayah.label}
            </div>
            <div>03, Nov</div>
          </div>
        </div>
      </div>
      {/* <div>RP 65.000.000</div> */}
    </div>
  );
}
