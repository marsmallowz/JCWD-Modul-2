import { TfiArrowLeft } from "react-icons/tfi";
import { BsChevronRight } from "react-icons/bs";
import { BiCar, BiBuildingHouse } from "react-icons/bi";
import { FaMotorcycle } from "react-icons/fa";
import { FiMonitor, FiBookOpen } from "react-icons/fi";
import { RiSuitcaseLine } from "react-icons/ri";
import {
  MdOutlineChair,
  MdOutlineBedroomBaby,
  MdOutlinePrint,
} from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";

export default function PostPage(params) {
  return (
    <div>
      <div className="sticky top-0 h-30 bg-slate-100 p-6 shadow-md">
        <TfiArrowLeft className="font-bold text-xl" />
      </div>
      <div className="flex flex-col items-center p-4 gap-3">
        <h1 className="font-bold text-2xl">PASANG IKLAN ANDA</h1>
        <div className="flex flex-col w-4/5 md:w-2/3 rounded-sm ">
          <div className="flex bg-white p-5 items-center font-bold text-base text-gray-800 border-x-2 border-t-2">
            PILIH KATEGORI
          </div>
          <div className="flex border-b-2 border-x-2">
            <ul className="basis-1/2 flex flex-col">
              <li className="group relative">
                <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                  <div className="flex gap-3 text-base items-center ">
                    <BiCar className="w-6 h-6" />
                    <div>Mobil</div>
                  </div>
                  <BsChevronRight />
                </div>
                <ul className="group-hover:block hidden w-full absolute text-gray-700 top-0 -right-full border-2 divide-y-2">
                  <li>
                    <button className="hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left">
                      Mobil Bekas
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left ">
                      Aksesoris
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left ">
                      Audio Mobil
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left ">
                      Spare Part
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left ">
                      Velg dan Ban
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left ">
                      Truk & Kendaraan Komersial
                    </button>
                  </li>
                </ul>
              </li>

              <li className="group relative">
                <div className=" w-full border-t-2 flex justify-between items-center text-xl bg-white px-4 py-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black ">
                  <div className="flex gap-3 text-base items-center ">
                    <BiBuildingHouse className="w-6 h-6" />
                    <div>Properti</div>
                  </div>
                  <BsChevronRight />
                </div>
                <ul className="group-hover:block hidden w-full absolute text-gray-700 top-0 -right-full border-2 divide-y-2">
                  <li>
                    <button className="hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap w-full text-left">
                      Dijual: Rumah & Apartemen
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap  w-full text-left">
                      Disewakan: Rumah & Apartemen
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap  w-full text-left">
                      Tanah
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap  w-full text-left">
                      Indekos
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap  w-full text-left">
                      Dijual: Bangunan Komersil
                    </button>
                  </li>
                  <li>
                    <button className=" hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap  w-full text-left">
                      Disewakan: Bangunan Komersil
                    </button>
                  </li>
                </ul>
              </li>

              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <FaMotorcycle className="w-6 h-6" />
                  <div>Motor</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <RiSuitcaseLine className="w-6 h-6" />
                  <div>Jasa & Lowongan Kerja</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <FiMonitor className="w-6 h-6" />
                  <div>Elektronik & Gadget</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <FiBookOpen className="w-6 h-6" />
                  <div>Hobi & Olahraga</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <MdOutlineChair className="w-6 h-6" />
                  <div>Rumah Tangga</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <IoShirtOutline className="w-6 h-6" />
                  <div>Keperluan Pribadi</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <MdOutlineBedroomBaby className="w-6 h-6" />
                  <div>Perlengkapan Bayi & Anak</div>
                </div>
                <BsChevronRight />
              </div>
              <div className="border-t-2 flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
                <div className="flex gap-3 text-base items-center ">
                  <MdOutlinePrint className="w-6 h-6" />
                  <div>Kantor & Industri</div>
                </div>
                <BsChevronRight />
              </div>
            </ul>
            <div className="basis-1/2 flex flex-col bg-white border-l-2"></div>
          </div>
        </div>
      </div>
      <div class="group inline-block">
        <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
          <span class="pr-1 font-semibold flex-1">Dropdown</span>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
          <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">Langauges</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
              <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button class="w-full text-left flex items-center outline-none focus:outline-none">
                  <span class="pr-1 flex-1">Python</span>
                  <span class="mr-auto">
                    <svg
                      class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                >
                  <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                  <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                </ul>
              </li>
              <li class="px-3 py-1 hover:bg-gray-100">Go</li>
              <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
            </ul>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
        </ul>
      </div>{" "}
    </div>
  );
}

// return (
//     <div>
//       <div className="sticky top-0 h-30 bg-slate-100 p-6 shadow-md">
//         <TfiArrowLeft className="font-bold text-xl" />
//       </div>
//       <div className="flex flex-col items-center p-4 gap-3">
//         <h1 className="font-bold text-2xl">PASANG IKLAN ANDA</h1>
//         <div className="grid grid-cols-2 grid-rows-[repeat(12,_minmax(0,_1fr))] w-2/3 p-0.5 bg-gray-300 gap-0.5 grid-flow-col rounded-sm">
//           <div className="col-span-2 row-span-2 flex bg-white px-5 items-center font-bold text-base">
//             PILIH KATEGORI
//           </div>
//           <div className="flex justify-between items-center text-xl bg-white p-3 text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black">
//             <div className="flex gap-3 text-base items-center ">
//               <BiCar className="w-6 h-6" />
//               <div>Mobil</div>
//             </div>
//             <BsChevronRight />
//           </div>
//           <div className="bg-white p-2">3</div>
//           <div className="bg-white p-2">4</div>
//           <div className="bg-white p-2">5</div>
//           <div className="bg-white p-2">6</div>
//           <div className="bg-white p-2">7</div>
//           <div className="bg-white p-2">8</div>
//           <div className="bg-white p-2">9</div>
//           <div className="bg-white p-2">10</div>
//           <div className="bg-white p-2">11</div>
//           <div className="bg-white p-2 row-[span_10_/_span_12]"></div>
//         </div>
//       </div>
//     </div>
//   );
