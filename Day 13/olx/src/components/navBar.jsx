import Select from "react-tailwindcss-select";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsChat, BsBell, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user_types from "../redux/auth/types";

export default function NavBar(params) {
  const [animal, setAnimal] = useState(null);
  const userSelector = useSelector((state) => state.auth);
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
  let navigate = useNavigate();
  let dispatch = useDispatch();

  function logOut() {
    dispatch({
      type: user_types.USER_LOGOUT,
    });
    localStorage.clear();
    window.location.reload(true);
  }
  function handleChange(value) {
    console.log("value:", value);
    setAnimal(value);
  }

  return (
    <div className="sticky top-0 z-10 bg-slate-100 border-white border-b-4 shadow-md">
      <div className="flex flex-row py-2 px-10 mx-auto justify-between gap-5 items-center z-50">
        <img
          src="/assets/OLX-green-logo.png"
          alt=""
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="w-10 h-6 cursor-pointer"
        />
        <div className="w-1/3 ">
          <Select
            options={options}
            isSearchable="true"
            onChange={handleChange}
            value={animal}
            classNames={{ searchContainer: "py-5" }}
          />
        </div>
        {/* sebelumnya 11/12 */}
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
        <div className="flex flex-row gap-4 items-center font-bold p">
          {userSelector.username ? (
            <>
              <BsChat className="w-9 h-9" />
              <BsBell className="w-9 h-9" />
              <div
                onClick={logOut}
                className="flex gap-1 items-center cursor-pointer"
              >
                <img
                  src={userSelector.avatar_url}
                  alt="/assets/japan.jpg"
                  className="rounded-full w-16 h-10 object-cover"
                />
                <BsChevronDown className="w-10 h-10" />
              </div>
            </>
          ) : (
            <span
              className="border-b-2 border-black hover:border-b-0 cursor-pointer"
              onClick={() => params.setShowModal(true)}
            >
              Login/daftar
            </span>
          )}

          <button
            onClick={() => {
              navigate("/post", { replace: true });
            }}
            className="bg-white px-4 py-2 rounded-full flex items-center gap-1 border-4 border-yellow-500"
          >
            <HiPlus className="w-5 h-5" />
            <div className="font-bold">JUAL</div>
          </button>
        </div>
      </div>
    </div>
  );
}
