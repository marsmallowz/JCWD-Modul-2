import { TfiClose, TfiArrowLeft } from "react-icons/tfi";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { axiosInstance } from "../config/config";

export default function ModalLogin({ isVisible, closeModal }) {
  let navigate = useNavigate();
  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async () => {
      const res = await axiosInstance.get("/users/", { params: formik.values });
      if (res.status === 200)
        navigate("/", { replace: true, state: { user: res.data[0] } });
    },
  });

  useEffect(() => {
    let { password, username } = formik.values;
    console.log(formik.values);
    if (password && username) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [formik.values]);

  if (!isVisible) return null;
  function closeModalOnWrapper(e) {
    if (e.target.id === "wrapper") closeModal();
  }
  return (
    <div
      className="fixed inset-0  bg-opacity-70  z-40 flex flex-col justify-center items-center"
      id="wrapper"
      onClick={closeModalOnWrapper}
    >
      <div className="w-1/3 h-5/6 px-7 ">
        <div className="flex flex-col h-full gap-6 bg-white border-2 p-3 rounded-md">
          <div className="flex justify-between">
            <TfiArrowLeft
              className="h-6 w-6 cursor-pointer"
              onClick={() => closeModal()}
            />
            <TfiClose className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <img src="/assets/OLX-green-logo.png" alt="" className="w-14 h-8" />
            <div className="font-bold text-xl">Formulir Masuk</div>
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="p-2 text-base rounded-sm  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
            />
            <input
              className="p-2 text-base rounded-sm  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-5 p-3 font-bold bg-black text-white hover:bg-white border-2 border-black disabled:border-gray-300  hover:text-black disabled:text-gray-400 disabled:bg-gray-300 rounded-sm disabled:cursor-not-allowed"
            disabled={formik.isValid && enable ? null : "disabled"}
            onClick={formik.handleSubmit}
          >
            Lanjut
          </button>
          <div className="px-4 text-gray-400 text-xs text-center">
            Kami tidak akan mengungkapkan email Anda kepada orang lain atau
            menggunakannya untuk mengirimi Anda spam
          </div>
        </div>
      </div>
    </div>
  );
}
