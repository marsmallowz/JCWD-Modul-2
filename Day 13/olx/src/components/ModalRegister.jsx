import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { axiosInstance } from "../config/config";
import { TfiClose, TfiArrowLeft } from "react-icons/tfi";

export default function ModalRegister({
  isVisible,
  closeModal,
  showModalLogin,
}) {
  let navigate = useNavigate();
  const [enable, setEnable] = useState(false);
  let listImage = [
    "/assets/l1.jpeg",
    "/assets/l2.jpeg",
    "/assets/l3.jpeg",
    "/assets/l4.jpeg",
    "/assets/l5.jpeg",
    "/assets/l6.jpeg",
    "/assets/l7.jpeg",
    "/assets/l8.jpeg",
    "/assets/l9.jpeg",
  ];
  const formik = useFormik({
    initialValues: {
      id: 0,
      email: "",
      username: "",
      password: "",
      avatar_url: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Email is not valid"),
    }),
    onSubmit: async () => {
      const res = await axiosInstance.post("/users/", formik.values);
      if (res.status === 201) {
        closeModal();
        showModalLogin();
      }
    },
  });

  useEffect(() => {
    let { email, password, username } = formik.values;
    console.log(formik.values);
    if (email && password && username) {
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
            <div className="font-bold text-xl ">Formulir Pendaftaran</div>
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="p-2 text-base rounded-sm  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="email"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              placeholder="Email"
            />
            <input
              className="p-2 text-base rounded-sm  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="username"
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
              placeholder="Username"
            />
            <input
              className="p-2 text-base rounded-sm  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              name="password"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="mt-5 p-3 font-bold bg-black text-white hover:bg-white border-2 border-black disabled:border-gray-300  hover:text-black disabled:text-gray-400 disabled:bg-gray-300 rounded-sm disabled:cursor-not-allowed"
            disabled={formik.isValid && enable ? null : "disabled"}
            onClick={() => {
              let randomNumber = Math.floor(Math.random() * 9);
              console.log(randomNumber);
              formik.setFieldValue("avatar_url", listImage[randomNumber]);
              formik.handleSubmit();
            }}
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
