import Select from "react-tailwindcss-select";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsChevronRight, BsTelephone } from "react-icons/bs";

import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ModalMain from "../components/ModalMain";

export default function ItemPage(params) {
  const [showModal, setShowModal] = useState(false);
  const [animal, setAnimal] = useState(null);

  const options = [
    {
      label: "🌐 GUNAKAN LOKASI SAAT INI",
      value: "GUNAKAN LOKASI SAAT INI",
    },
    {
      label: "LOKASI TERKINI",
      options: [{ value: "Kepulauan Riau", label: "Kepulauan Riau" }],
    },
    {
      label: "LOKASI POPULER",
      options: [
        { value: "Jakarta Utara", label: "Jakarta Utara" },
        { value: "Jakarta Selatan", label: "Jakarta Selatan" },
      ],
    },
    // { value: "Jakarta D.K.I", label: "" },
  ];
  function handleChange(value) {
    console.log("value:", value);
    setAnimal(value);
  }
  return (
    <div className="bg-slate-100">
      <div className="sticky top-0 z-10 bg-slate-100 border-white border-b-4 shadow-sm">
        <div className="flex flex-row py-2 px-10 mx-auto justify-between gap-5 items-center z-50">
          <img src="/assets/OLX-green-logo.png" alt="" className="w-10 h-6" />
          <div className="w-1/3 ">
            <Select
              options={options}
              isSearchable="true"
              onChange={handleChange}
              value={animal}
              classNames={{ searchContainer: "py-5" }}
            />
          </div>

          {/* <div className="font-medium text-lg text-slate-800">Search</div> */}
          <div className="flex justify-center w-11/12  ">
            <input
              type="text"
              placeholder="Temukan Mobil, Handphone, dan lainnnya ..."
              className="p-3 rounded-l-md w-11/12 border-y-2 border-l-2 border-black"
            />
            <button className="p-3 rounded-r-md bg-slate-800 ">
              <FiSearch className="text-white w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-row gap-4 items-center font-bold">
            <span
              className="border-b-2 border-black hover:border-b-0 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Login/daftar
            </span>
            <button className="bg-white px-4 py-2 rounded-full flex items-center gap-1 border-4 border-yellow-500">
              <HiPlus className="w-5 h-5" />
              <div className="font-bold">JUAL</div>
            </button>
          </div>
        </div>
      </div>
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
                src="/assets/japan.jpg"
                alt=""
                className="h-[480px] object-cover "
              />
            </div>
            <div className="flex w-32 h-32 p-5 gap-5">
              <img src="/assets/japan.jpg" alt="" />
              <img src="/assets/japan.jpg" alt="" />
              <img src="/assets/japan.jpg" alt="" />
              <img src="/assets/japan.jpg" alt="" />
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
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              deleniti, repellendus minima iste, praesentium voluptates, omnis
              adipisci blanditiis modi iure culpa eligendi! Voluptatum officiis
              a quam ipsum dignissimos similique in. Magni impedit autem
              voluptatem fugit, incidunt obcaecati nisi qui enim, itaque tenetur
              sint! Quidem exercitationem beatae similique minima expedita! In
              temporibus pariatur libero velit, et ad cum corporis reiciendis
              maiores!
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 gap-2">
          <div className="flex flex-col gap-1 px-4 py-5 border-2 rounded-md bg-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">RP 8.650.000</div>
              <div className="flex gap-3">
                <AiOutlineHeart className="w-7 h-7" />
                <AiOutlineShareAlt className="w-7 h-7" />
              </div>
            </div>
            <div>2003</div>
            <div className="text-gray-500">Satria Hiu Mulus seperti baru</div>
            <div className="flex mt-2 text-xs  justify-between text-gray-600 ">
              <div className="">Ciracas, Jakarta Timur, Jakarta D.K.I.</div>
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
