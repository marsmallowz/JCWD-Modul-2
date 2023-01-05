import PostCard from "../components/PostCard";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function HomePage() {
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
    <div className="flex flex-col">
      <div className="sticky top-0 z-50 bg-slate-100 border-white border-b-4 shadow-sm">
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
            <span className="border-b-2 border-black hover:border-b-0 cursor-pointer">
              Login/daftar
            </span>
            <button className="bg-white px-4 py-2 rounded-full flex items-center gap-1 border-4 border-yellow-500">
              <HiPlus className="w-5 h-5" />
              <div className="font-bold">JUAL</div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 py-3 px-8 items-center">
        <div className="font-medium">SEMUA KATEGORI</div>
        <div className="flex gap-4 text-sm">
          <div>Mobil Bekas</div>
          <div>Motor Bekas</div>
          <div>Properti</div>
          <div>Handphone</div>
          <div>Jasa & Lowongan Kerja</div>
          <div>TV & Audio, Video</div>
        </div>
      </div>
      <img
        src="https://statics.olx.co.id/external/base/img/hero_bg_id.jpg"
        alt=""
        className="h-64 object-cover"
      />
      <div className="text-lg">Rekomendasi Terbaru</div>
      <div className="px-10 py-5">
        <div className="grid grid-cols-4 gap-3">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
