import { useEffect, useState } from "react";
import { BsChevronRight, BsTelephone } from "react-icons/bs";
import ModalMain from "../components/ModalMain";

import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../config/config";

export default function ItemPage(params) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchItemDetails(id) {
    const res = await axiosInstance.get("/items", { params: { id } });
    console.log(res.data[0]);
    console.log({ ...res.data[0] });

    setItem({ ...res.data[0] });
  }
  useEffect(() => {
    setIsLoading(false);
    let itemId = location.pathname?.split("/item/")[1];
    fetchItemDetails(itemId);
    console.log("myItem");
    console.log(item);
    console.log("foto");
    console.log(item.listFoto);
  }, [location.pathname?.split("/item/")[1]]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="bg-slate-100">
      <NavBar setShowModal={setShowModal} />
      <div className="flex gap-1 mx-10">
        <div>Beranda</div>
        <div>&rsaquo;</div>
        <div>Motor Bekas</div>
        <div>&rsaquo;</div>
        <div>Satria Hiu Mulus</div>
      </div>
      <div className="w-11/12 text-center text- mx-auto mt-5 p-10 bg-slate-300 ">
        IKLAN
      </div>
      <div className="flex p-10 gap-4">
        <div className="flex flex-col basis-2/3 gap-2 rounded-md">
          <div className="flex flex-col border-2  rounded-md  shadow-sm bg-white">
            <div className="flex justify-center bg-black rounded-t-md">
              <img
                src={item?.listFoto[0]}
                alt="/assets/japan.jpg"
                className="h-[480px] object-cover"
              />
            </div>
            <div className="flex w-32 h-32 p-5 gap-5">
              {item.listFoto?.map((foto) => {
                return <img src={foto} alt="/assets/japan.jpg" />;
              })}
            </div>
          </div>
          <div className="flex flex-col rounded-md border-2 p-3 bg-white">
            <div className="font-bold text-xl mb-3">Detail</div>
            <div className="grid grid-cols-4 mb-3">
              <div className="text-gray-500">Merek</div>
              <div>Suzuki</div>
              <div className="text-gray-500">Model</div>
              <div>Satria</div>
              <div className="text-gray-500">Tahun</div>
              <div>2003</div>
              <div className="text-gray-500">Jarak Tempuh</div>
              <div>20.000-25.000 km</div>
              <div className="text-gray-500">Tipe Penjual</div>
              <div>Individu</div>
            </div>
            <hr className="border-t-2 border-gray-300 my-3 " />
            <div className="font-bold text-xl mb-3">Deskripsi</div>
            <div>{item.dekskripsi}</div>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 gap-2">
          <div className="flex flex-col gap-1 px-4 py-5 border-2 rounded-md bg-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">
                RP {parseFloat(item.harga).toLocaleString("en")}
              </div>
              <div className="flex gap-3">
                <AiOutlineHeart className="w-7 h-7" />
                <AiOutlineShareAlt className="w-7 h-7" />
              </div>
            </div>
            <div>2003</div>
            <div className="text-gray-500">{item.judul}</div>
            <div className="flex mt-2 text-xs  justify-between text-gray-600 ">
              <div className="">
                {item.kecamatan?.label}, {item.kota?.label},{" "}
                {item.wilayah?.label}
              </div>
              <div>27 Nov</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 py-5 border-2 rounded-md bg-white">
            <div className="text-xl">Deskripsi penjual</div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src="/assets/japan.jpg"
                  alt=""
                  className="rounded-full w-16 h-16"
                />
                <div className="flex flex-col justify-center">
                  <div className="font-bold text-lg">Alexs</div>
                  <div className="text-xs">Anggota sejak Mar 2018</div>
                </div>
              </div>
              <BsChevronRight />
            </div>
            <div className="py-2 font-medium text-lg text-center rounded-sm border-2 border-black cursor-pointer hover:border-inherit hover:border-2">
              Chat dengan penjual
            </div>
            <div className="flex gap-2 justify-center items-center">
              <BsTelephone className="w-6 h-6" />
              <div className="text-sm">** *** ***</div>
              <a href="" className="text-sm text-sky-500 underline">
                Tampilkan Nomor
              </a>
            </div>
          </div>
          <div>iklan olx item lain</div>
          <div>Lokasi Iklan item ini</div>
          <div>iklan olx lain</div>
          <div>iklan olx lain</div>
        </div>
      </div>
      <ModalMain isVisible={showModal} closeModal={() => setShowModal(false)} />
    </div>
  );
}
