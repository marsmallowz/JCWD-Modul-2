import { TfiClose, TfiArrowLeft } from "react-icons/tfi";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";
import { useState } from "react";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";

export default function ModalMain({ isVisible, closeModal }) {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  if (!isVisible) return null;
  function closeModalOnWrapper(e) {
    if (e.target.id === "wrapper") closeModal();
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-20 flex flex-col justify-center items-center"
      id="wrapper"
      onClick={closeModalOnWrapper}
    >
      <div className="w-1/3 h-5/6 px-7 ">
        <div className="flex flex-col h-full gap-5 bg-white border-2 p-3 rounded-md">
          <div className="flex justify-between">
            <TfiClose className="text-white h-6 w-6" />
            <TfiClose
              className="h-6 w-6 cursor-pointer"
              onClick={() => closeModal()}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <BsChevronLeft className="h-6 w-6 text-gray-400" />
              <div className="flex flex-col items-center">
                <img src="/assets/1l.png" alt="" className="w-1/3 h-w-1/3" />
                <div className="font-bold text-center">
                  Bantu jadikan OLX tempat jual beli yang lebih aman
                </div>
              </div>
              <BsChevronRight className="h-6 w-6 text-gray-400" />
            </div>
            <div className="flex justify-center">
              <BsDot className="h-6 w-6 text-blue-600" />
              <BsDot className="h-6 w-6 text-gray-400" />
              <BsDot className="h-6 w-6 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="py-2 font-medium text-base text-center rounded-sm border-2 border-black cursor-pointer hover:border-inherit hover:border-2"
              onClick={() => setShowModalLogin(true)}
            >
              Login/Daftar dengan telepon
            </div>
            <div className="py-2 font-medium text-base text-center rounded-sm border-2 border-black cursor-pointer hover:border-inherit hover:border-2">
              Login/Daftar dengan google
            </div>
            <div
              className="py-2 font-medium text-base text-center rounded-sm border-2 border-black cursor-pointer hover:border-inherit hover:border-2"
              onClick={() => setShowModalRegister(true)}
            >
              Login/Daftar dengan email
            </div>
          </div>
          <div className="flex flex-col  text-xs text-center gap-4 mt-5">
            <div>
              Kami tidak akan membagikan detail pribadi Anda dengan siapa pun
            </div>
            <div>
              <span className="text-gray-400 mr-1">
                Jika Anda login, Anda menerima
              </span>
              <a href="" className="text-sky-800">
                Syarat dan Ketentuan serta Kebijakan Privasi OLX
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalRegister
        isVisible={showModalRegister}
        closeModal={() => setShowModalRegister(false)}
        showModalLogin={() => setShowModalLogin(true)}
      />
      <ModalLogin
        isVisible={showModalLogin}
        closeModalMain={() => closeModal()}
        closeModalLogin={() => setShowModalLogin(false)}
      />
    </div>
  );
}
