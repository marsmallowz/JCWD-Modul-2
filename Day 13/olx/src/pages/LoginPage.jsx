import { useFormik } from "formik";
import { useState } from "react";
import { axiosInstance } from "../config/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
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

  return (
    <div className="flex h-screen">
      <img
        src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/12/4247617096.jpg"
        alt=""
        className="w-3/5 object-cover"
      />
      <div className="flex flex-col justify-center bg-slate-300 h-screen w-2/5">
        <form className=" flex flex-col mx-auto gap-y-2 ">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
              className="py-2 px-12"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              className="py-2 px-12"
            />
          </div>
          <div className="flex flex-col mt-4">
            <input
              onClick={formik.handleSubmit}
              type="button"
              value="Submit"
              disabled={enable ? null : "disable"}
              className="py-2 cursor-pointer bg-slate-600 disabled:bg-slate-100 disabled:text-gray-700"
            />
          </div>
        </form>
      </div>
    </div>
    // <div className="flex flex-col justify-center bg-slate-300 h-screen">
    //   <form className=" flex flex-col mx-auto  lg:w-1/3 w-4/5 gap-y-2 px-10">
    //     <div className="flex flex-col">
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         name="username"
    //         onChange={(e) => formik.setFieldValue("username", e.target.value)}
    //         className="py-2 px-2"
    //       />
    //     </div>
    //     <div className="flex flex-col">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         onChange={(e) => formik.setFieldValue("password", e.target.value)}
    //         className="py-2 px-2"
    //       />
    //     </div>
    //     <div className="flex flex-col mt-4">
    //       <input
    //         onClick={formik.handleSubmit}
    //         type="button"
    //         value="Submit"
    //         disabled={enable ? null : "disable"}
    //         className="py-2 cursor-pointer bg-slate-600 disabled:bg-slate-100 disabled:text-gray-700"
    //       />
    //     </div>
    //   </form>
    // </div>
  );
}
