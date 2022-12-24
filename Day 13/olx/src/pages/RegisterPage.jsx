import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { axiosInstance } from "../config/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RegisterPage(params) {
  let navigate = useNavigate();
  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: 0,
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Email is not valid"),
    }),
    onSubmit: async () => {
      console.log("aa");
      console.log(formik.values);
      const res = await axiosInstance.post("/users/", formik.values);
      if (res.status === 201) navigate("/login", { replace: true });
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
  return (
    <div className="flex flex-col justify-center bg-pink-400 h-screen">
      <form className=" flex flex-col mx-auto lg:w-1/3 w-4/5 gap-y-2 px-10">
        <div className="flex flex-col">
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
            className="py-2 px-2"
          />
          <p className="text-red-600">{formik.errors.email}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => formik.setFieldValue("username", e.target.value)}
            className="py-2 px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
            className="py-2 px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="repassword">Retype Password</label>
          <input
            type="password"
            name="repassword"
            // onChange={(e) => formik.setFieldValue("repassword", e.target.value)}
            className="py-2 px-2"
          />
        </div>
        <div className="flex flex-col mt-5">
          <input
            onClick={formik.handleSubmit}
            type="button"
            value="Submit"
            disabled={formik.isValid && enable ? null : "disabled"}
            className="py-2 cursor-pointer bg-pink-700 disabled:bg-slate-50 disabled:text-slate-500"
          />
        </div>
      </form>
    </div>
  );
}
